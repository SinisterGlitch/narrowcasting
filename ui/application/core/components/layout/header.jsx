var React = require('react');
var $ = require('react');

var Menu = require('core/components/layout/menu');
var Login = require('core/components/layout/login');

var Header = React.createClass({

    getInitialState: function () {
        return ({
            menu: [
                { label:'home', route:'home'},
                { label:'slides', route:'slides'},
            ]
        });
    },

    render: function(){
        return (
            <div className="view">
                <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">BestCasting</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <Menu items={this.state.menu} />
                        <Login />
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Header;