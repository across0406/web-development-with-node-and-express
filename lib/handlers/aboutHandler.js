import Fortunes from '../fortunes.js';

export default {
    name: 'AboutHandler',
    go(req, res) {
        res.render('about', { fortune: Fortunes.getFortune() });
    },
}