import express from 'express'
import cors from 'cors'
import routes from './routes';

const app = express();

app.use(cors())
// colocando plugin express.json para aplicação
app.use(express.json())
app.use(routes)



app.listen(3333);

