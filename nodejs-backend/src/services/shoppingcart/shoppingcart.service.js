const { Shoppingcart } = require('./shoppingcart.class');
const createModel = require('../../models/shoppingcart.model');
const hooks = require('./shoppingcart.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shoppingcart', new Shoppingcart(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shoppingcart');

  service.hooks(hooks);
};