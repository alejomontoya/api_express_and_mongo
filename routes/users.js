var express = require('express');
var router = express.Router();
const faker = require('faker');
const users = require('../models/users')


/** CREATE user */
router.post('/create', async (req, res) => {
  const usuario = {
    name: req.body.name,
    email: req.body.email,
    imageUrl: req.body.imageUrl
  }
  const userCreated = await users.create(usuario);
  res.json({message: 'created success', data: userCreated});
});
/* GET users listing. */
router.get('/find', async (req, res) => {
  const usuarios = await users.find();
  res.json(usuarios)
});

/**GET user by id */
router.get('/:_id', async(req, res) => {
  const usuario = await users.findById(req.params._id);
  res.json(usuario);
});

/**DELETE user by id */
router.delete('/:_id', async(req, res) => {
  const usuario = await users.findByIdAndDelete(req.params._id);
  res.json(usuario);
});

/**PUT user by id */
router.put('/:_id', async(req, res) => {
  const usuario = {
    name: req.body.name,
    email: req.body.email,
    imageUrl: req.body.imageUrl
  }
  const usuarioUpdate = await users.findByIdAndUpdate({_id: req.params._id}, usuario);
  res.json(usuarioUpdate);
});

module.exports = router;
