var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Header = require('core/components/layout/header');

module.exports = React.createClass({

    /**
     * Render component
     */
    render: function(){
        return (
            <div>
                <Header />
                <div id="main">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});