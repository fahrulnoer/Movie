const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const routes = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// for parsing application/json
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

app.use(routes);

app.listen(port, () => {
  console.log(`listening on Port: ${port}`)
})