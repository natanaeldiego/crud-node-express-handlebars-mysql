const express = require('express');
const cors = require('cors');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routes = require('./routes');

// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "views/"));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ok`);
});