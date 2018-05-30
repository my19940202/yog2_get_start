var util = require('../lib/util.js');
var nums = util.generateArr();
var sq = new (util.Square)(12);
// console.log(sq.area());
var oldnum = util.a;
var lbsModel = require("../model/lbs.js");

module.exports = function(req, res, next){
    console.log("this is fuck you", req.query.name, req.query.region);
    // res.send('Hello World!');

    // 访问 server后进行渲染
    lbsModel.search(req.query.name, req.query.region)
        // .then(res.json.bind(res))
        .then(function (data) {
            yog.log.debug("yog.log.debug");
            yog.log.trace("yog.log.trace");
            yog.log.notice("yog.log.notice");
            yog.log.warning("yog.log.warning");
            yog.log.fatal("yog.log.fatal");
            res.render('home/page/test.tpl', {
                name: 'test page name',
                hope: 'a bunche of money',
                nums: nums,
                data: data.results || [],
                calcu: function (arg) {
                    return arg * arg;
                }
            });
        })
        .catch(next);

};