"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const GUEST_ID = "602374335406731dcb566555";

module.exports = {
  async place(ctx) {
    const {
      shippingAddress,
      billingAddress,
      shippingInfo,
      billingInfo,
      shippingOption,
      subtotal,
      tax,
      total,
      items,
    } = ctx.request.body;

    let orderCustomer;

    if (ctx.state.user) {
      orderCustomer = ctx.state.user.id;
    } else {
      orderCustomer = GUEST_ID;
    }

    let serverTotal = 0;
    let unavailable = [];

    await Promise.all();

    //only executed after everything in Promise.all has completed SUCCESSFULLY
  },
};
