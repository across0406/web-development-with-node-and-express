export default {
    name: 'ServerErrorHandler',
    go(err, req, res, next) {
        res.render('500');
    },
}