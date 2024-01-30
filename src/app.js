const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const mainRouter = require('./routes/mainRouter.js');
app.use(mainRouter);