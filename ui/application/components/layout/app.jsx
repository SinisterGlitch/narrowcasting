var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Notification = require('components/layout/notification');
var Header = require('components/layout/header');

/**
 * App component
 */
class App extends React.Component {

    /**
     * Render application
     */
    render() {
        return (
            <div className="container">
                <Header />
                <Notification/>
                <div className="jumbotron">
                    <RouteHandler />
                </div>
            </div>
        );
    }
}

module.exports = App;