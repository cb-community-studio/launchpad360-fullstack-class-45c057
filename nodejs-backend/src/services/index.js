const users = require("./users/users.service.js");
const book = require("./book/book.service.js");
const shoppingcart = require("./shoppingcart/shoppingcart.service.js");
const customer = require("./customer/customer.service.js");
const staff = require("./staff/staff.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(book);
  app.configure(shoppingcart);
  app.configure(customer);
  app.configure(staff);
  // ~cb-add-configure-service-name~
};
