module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: { enabled: true },
  url: env("URL", "http://localhost"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c423fcb4b1d5ec19947db8a7a7bb9104"),
    },
  },
});
