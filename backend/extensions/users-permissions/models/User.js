var stripe = require("stripe")(process.env.STRIPE_SK);

module.exports = {
  lifecycles: {
    // Called before an entry is created
    async beforeCreate(data) {
      const customer = await stripe.customers.create({
        name: data.username,
        email: data.email,
      });

      data.stripeID = customer.id;

      data.paymentMethods = [
        { brand: "", last4: "" },
        { brand: "", last4: "" },
        { brand: "", last4: "" },
      ];

      data.contactInfo = [
        { name: data.username, email: data.email, phone: "" },
        { name: "", email: "", phone: "" },
        { name: "", email: "", phone: "" },
      ];

      data.locations = [
        { street: "", zip: "", city: "", state: "" },
        { street: "", zip: "", city: "", state: "" },
        { street: "", zip: "", city: "", state: "" },
      ];
    },
  },
};
