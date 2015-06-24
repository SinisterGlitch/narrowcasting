var React = require('react');

var Menu = require('core/components/layout/menu');
var Login = require('core/components/layout/login');

/**
 * Header component
 */
class Header extends React.Component {

    /**
     * Get menu items
     */
    static getMenuItems() {
        return [
            {label: 'login', route: 'login'},
            {label: 'home', route: 'home'}
        ]
    }

    /**
     * Render component
     */
    render(){
        return (
            <div className="view">
                <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">BestCasting</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <Menu items={Header.getMenuItems()} />
                        <Login />
                    </div>
                </nav>
            </div>
        );
    }
}

module.exports = Header;