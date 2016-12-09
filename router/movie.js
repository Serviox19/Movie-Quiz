const express = require('express');
const movieRouter = express.Router();

movieRouter.route('/63')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/monkeys.html');
  })

movieRouter.route('/107')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/snatch.html');
  })

movieRouter.route('/161')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/oceans-11.html');
  })

movieRouter.route('/163')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/oceans-12.html');
  })

movieRouter.route('/298')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/oceans-13.html');
  })

movieRouter.route('/550')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/fight-club.html');
  })

movieRouter.route('/652')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/troy.html');
  })

movieRouter.route('/787')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/smith.html');
  })

movieRouter.route('/807')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/se7en.html');
  })

movieRouter.route('/1164')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/babel.html');
  })

movieRouter.route('/1422')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/departed.html');
  })

movieRouter.route('/4922')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/benjamin.html');
  })

movieRouter.route('/16869')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/inglourious.html');
  })

movieRouter.route('/23483')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/kick-ass.html');
  })

movieRouter.route('/72190')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/world-war-z.html');
  })

movieRouter.route('/76203')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/slave.html');
  })

movieRouter.route('/228150')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/fury.html');
  })

movieRouter.route('/273895')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/selma.html');
  })

movieRouter.route('/318846')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/big-short.html');
  })

movieRouter.route('/369885')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/src/partials/allied.html');
  })

module.exports = movieRouter;
