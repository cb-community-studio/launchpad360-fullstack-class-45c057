const assert = require('assert');
const app = require('../../src/app');

describe('\'shoppingcart\' service', () => {
  it('registered the service', () => {
    const service = app.service('shoppingcart');

    assert.ok(service, 'Registered the service (shoppingcart)');
  });
});
