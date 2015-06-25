var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Header = require('components/layout/header');

/**
 * App component
 */
class App extends React.Component {

    /**
     * Render component
     */
    render() {
        return (
            <div style={{width:'100%', textAlign:'center'}}>
                <Header />
                <div id="main">
                    <RouteHandler />
                </div>
            </div>
        );
    }
}

module.exports = App;