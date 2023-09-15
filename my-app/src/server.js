import { createServer } from 'miragejs';

createServer({
  routes() {
    this.get('/api/users', () => ({
      users: [
        { id: 1, name: 'Bob', password: 'Bob' },
        { id: 2, name: 'Rob', password: 'Rob' },
        { id: 3, name: 'Lee', password: 'Lee' },
      ],
    }));

    let newId = 4;
    this.post('/api/users', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = newId++;
      return { reminder: attrs };
    });
  },
});

// const users = [
//   { name: 'Bob', password: 'Bob' },
//   { name: 'Alice', password: 'Alice' },
// ];

// export function makeServer({ environment = 'test' } = {}) {
//   let server = createServer({
//     environment,

//     models: {
//       user: Model,
//     },

//     seeds(server) {
//       server.create('user', { name: 'Bob', password: 'Bob' });
//       server.create('user', { name: 'Alice', password: 'Alice' });
//     },

//     routes() {
//       this.namespace = 'api';

//       this.get('/users', (schema) => {
//         return schema.users.all();
//       });

//       this.post('/users', (schema, request) => {
//         return users;
//         // const matchingUser = schema.users
//         //   .all()
//         //   .find((user) => user.name === JSON.parse(request.requestBody).name);

//         // return matchingUser;
//         // // if (matchingUser === undefined) {
//         //   return new Response(404, { errors: ['username invalid, bye'] });
//         // } else {
//         //   if (matchingUser.password === request.requestBody.password) {
//         //     return new Response(200, { errors: ['Your good to go!'] });
//         //   } else {
//         //     return new Response(404, {
//         //       errors: ['password invalid, bye'],
//         //     });
//         //   }
//         // }
//       });
//     },
//   });

//   return server;
// }
