var React = require('react');

var Menu = require('components/layout/menu');
var Login = require('components/layout/login');

/**
 * Header component
 */
class Header extends React.Component {

    /**
     * Get menu items
     */
    static getMenuItems() {
        return [
            {label: 'home', route: 'home'},
            {label: 'login', route: 'login'}
        ]
    }

    /**
     * Render component
     */
    render(){
        return (
            <div>
                <Menu items={Header.getMenuItems()} />
                <Login />
            </div>
        );
    }
}

module.exports = Header;