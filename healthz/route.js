const { pb } = require('../pocketbase/pocketbase')
const express = require('express')
const router = express.Router()
const pino = require('pino')
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})

router.get('/', async (req, res) => {
    try {
      const records = await pb.collection('healthz').getFullList({
          sort: '-created',
      });
      res.json(records);
    } catch (error) {
        logger.error(error);
        res.status(500).send("Internal error");
    }
});

module.exports = router;