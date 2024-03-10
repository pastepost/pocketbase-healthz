const PocketBase = require('pocketbase/cjs')
const pino = require('pino')
require('dotenv').config()
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})

const pb = new PocketBase(process.env.POCKETBASE_URL)

pb.admins.authWithPassword('hipomotgames@gmail.com', 'JRKvqoDpl33bH5MflqrYMVbjNr1S8K7v')
  .then(authData => {
    logger.info('Authentication successful')
  })
  .catch(error => {
    logger.error("Failed to init PocketBase or authenticate", error)
  })

module.exports = { pb }
