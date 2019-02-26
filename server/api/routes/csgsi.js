const express = require('express')
const GameMaster = require('../../GameMaster')
const router = express.Router()

const gameMaster = new GameMaster()

router.post('/update', (req, res) => {
  const data = req.body
  if(data === null ) { res.sendStatus(401); return}
  gameMaster._handleNewData(data)
  res.sendStatus(200)
});

router.get('/online', (req, res) => {
  res.send(gameMaster._getCurrentStatus())
});

router.get('/', (req, res) => {
  res.send(gameMaster._getLastestGameData())
});

router.get('/overlay/init', (req, res) => {
  const ok = gameMaster._checkIfHasData();
  if(ok) { res.sendStatus(200) }
  else { res.sendStatus(403) }
});

module.exports = router