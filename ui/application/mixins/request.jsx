//var React = require('react');
//var SuperAgent = require('superagent');
//
//module.exports = function () {
//    return {
//
//        get: function(url) {
//            return SuperAgent
//                .get(url)
//                .end(function (err, res) {
//                    if (res.ok) {
//                        DashboardActions.loadDefault.completed(res.body);
//                    } else {
//                        DashboardActions.loadDefault.failed(res.text);
//                    }
//                });
//        }
//    }
//});