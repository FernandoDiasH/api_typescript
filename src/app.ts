import express from 'express'
import { errorMidleware } from './middlewares/ErrorMiddleware'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes)
app.use(errorMidleware)

export{app}

