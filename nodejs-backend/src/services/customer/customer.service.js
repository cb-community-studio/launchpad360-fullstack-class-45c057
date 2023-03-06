const { Customer } = require('./customer.class');
const createModel = require('../../models/customer.model');
const hooks = require('./customer.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/customer', new Customer(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('customer');

  service.hooks(hooks);
};