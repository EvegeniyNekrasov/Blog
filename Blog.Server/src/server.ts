import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/tempRout'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', router)

export default app
