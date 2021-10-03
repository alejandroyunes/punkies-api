// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST'),
//         srv: env.bool('DATABASE_SRV', true),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME'),
//         username: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', true),
//       },
//     },
//   },
// });


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.oge7d.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'punkies-strapi'),
        username: env('DATABASE_USERNAME', 'punkiesycerebroadmin'),
        password: env('DATABASE_PASSWORD', '#78d4b;=3@yT96Wpunkies'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});