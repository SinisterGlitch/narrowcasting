var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Header = require('core/components/layout/header');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Header />
            </div>
        );
    }
});

module.exports = App;