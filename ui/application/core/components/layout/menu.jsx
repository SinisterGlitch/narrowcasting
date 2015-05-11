var React = require('react');
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
            <li className={this.isActive(item.route)}>
                <a href={item.route}>{item.label}</a>
            </li>
        );
    }
});

module.exports = Menu;