module.exports = function(options) {
    let time = options.time;

    return function(req, res, next) {
        let timer = setTimeout(() => {
            console.info('It\'s take too long !', req.method, req.url);
        }, 100);

        let end = res.end;
        res.end = function(chunk, encoding) {
            res.end = end;
            res.end(chunk, encoding);
            clearTimeout(timer);
        }
    }
}