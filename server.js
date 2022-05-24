const express = require('express')
const path = require('path')
const sequelize = require('./config/connection')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})
const routes = require('./controllers/index')
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express()
const PORT = process.env.PORT || 3001

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)




// turn on connection to db and server
sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(function () {
  sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, () => console.log('Now listening'))
  });
});

