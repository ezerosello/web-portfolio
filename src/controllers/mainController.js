const path = require('path');

const mainController = {

    'home': (req, res) => {
        res.render('index.ejs')
    },

    'send': (req,res) => {
        res.redirect('index.ejs')
    }
};

module.exports = mainController;
