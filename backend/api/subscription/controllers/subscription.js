"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async userSubscriptions(ctx) {
    let subscriptions = await strapi.services.subscription.find({
      user: ctx.state.user.id,
    });

    subscriptions.map((subscription) => {
      delete subscription.user;
      subscription = sanitizeEntity(subscription, {
        model: strapi.models.subscription,
      });
    });

    ctx.send(subscriptions, 200);
  },
};
