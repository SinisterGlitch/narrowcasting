var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var _ = require('lodash');
var Menu = React.createClass({

    getInitialState: function () {
        return ({
            activeRoute: 'home'
        });
    },

    isActive: function (route) {
        if (route == this.state.activeRoute) {
            return 'active';
        }
    },

    render: function () {
        return (
            <div>
                <ul className="nav navbar-nav">
                    { _.map(this.props.items, this.renderItem) }
                </ul>
            </div>
        );
    },

    renderItem: function (item) {
        return (
            <Link to={item.route}>{item.label}</Link>
        );
    }
});

module.exports = Menu;