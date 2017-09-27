import * as express from 'express';

import {WelcomeController} from './controllers';

const app: express.Application = express();

const port: number = 3000;

app.use('/wecome', WelcomeController);

app.listen(port,()=>{
    console.log('listening at http://localhost:${port}/');
})

