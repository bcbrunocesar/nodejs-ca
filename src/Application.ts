import express from 'express';
import { routes } from '@server';

class Application {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.jsonResponseWithNullProperties();
    this.middlewares();
    this.routes();
    this.start();
  }

  private start(): void {
    this.app.listen(3000);
  }

  private routes(): void {
    this.app.use(routes);
  }

  private middlewares(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private jsonResponseWithNullProperties(): void {
    this.app.set('json replacer', (key: unknown, value: unknown) => {
      if (!key) {
        return value;
      }

      return typeof value === 'undefined' ? null : value;
    });
  }
}

export default new Application();
