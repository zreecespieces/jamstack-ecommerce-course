module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "jamstack.course@gmail.com",
      defaultTo: "jamstack.course@gmail.com",
    },
  },
});
