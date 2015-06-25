var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/**
 * Menu component
 */
class Menu extends React.Component {
    /**
     * Render component
     */
    render() {
        return <ul>{this.props.items.map((item) => Menu.renderItem(item))}</ul>;
    }

    /**
     * Render menu items
     *
     * @param item
     */
    static renderItem(item) {
        return <Link key={item.route} to={item.route}>{item.label} </Link>;
    }
}

module.exports = Menu;