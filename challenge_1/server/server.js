const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path');
const router = jsonServer.router(path.join(__dirname, '../data/db.json'));
const middlewares = jsonServer.defaults();
const port = 3000;
 
server.use(middlewares)
server.use('/api', router);




server.listen(`${port}`, () => {
  console.log(`JSON Server is running on port ${port}`)
})