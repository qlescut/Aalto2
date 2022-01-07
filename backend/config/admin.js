module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ac12bec63be3afb0c590d42f761be75'),
  },
});
