// vendor
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

// core
var Notification = require('components/layout/notification');
var Navigation = require('components/layout/navigation');

module.exports = React.createClass({

    render() {
        return (
            <div>
                <Navigation />
                <Notification/>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});