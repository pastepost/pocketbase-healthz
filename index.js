const express = require('express')
const cors = require('cors')
const pino = require('pino')
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})

const app = express()

app.use(cors())
app.use(express.json())

const healthz = require('./healthz/route')

app.use('/healthz', healthz)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => logger.info(`API is running on port ${PORT}`))