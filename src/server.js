const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  //console.log('servidor en puerto', app.get('port'));
});

module.exports = server;
