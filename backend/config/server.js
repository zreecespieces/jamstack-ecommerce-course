module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("", "https://2d65a7e595af.ngrok.io"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c423fcb4b1d5ec19947db8a7a7bb9104"),
    },
  },
});
