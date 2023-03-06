const assert = require('assert');
const app = require('../../src/app');

describe('\'staff\' service', () => {
  it('registered the service', () => {
    const service = app.service('staff');

    assert.ok(service, 'Registered the service (staff)');
  });
});
