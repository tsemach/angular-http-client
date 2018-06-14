import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import angular from '../services/angular';

class Application {

  public express: express.Application;

  // run configuration methods on the express instance.
  constructor() { 
    this.express = express();
    this.express.use(cors())
    this.middleware();
    this.routes();
  }

  // configure express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
  }

  private routes(): void {
    this.express.use('/angular', angular.add());
  }
}

let application = new Application();

const port: number = 3000;

application.express.listen(port, () => {
    // success callback
    console.log(`Listening at http://localhost:${port}/`);
});
