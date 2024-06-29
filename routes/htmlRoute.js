const routes = require('express').Router();
const {ensureAuth, ensureGuest} = require('../midleware/auth');
const htmlController= require('../controllers/htmlController');

routes.get('/dashboard.html', ensureAuth, htmlController.dashboardCon);
routes.get('/input.html', ensureAuth, htmlController.inputCon);
module.exports = routes;