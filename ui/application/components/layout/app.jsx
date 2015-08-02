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
                <br />
                <div className="container">
                    <div className="jumbotron">
                        <RouteHandler />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = App;