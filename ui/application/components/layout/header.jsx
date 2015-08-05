var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Notification = require('components/layout/notification');
var Login = require('components/layout/login');

/**
 * Header component
 */
class Header extends React.Component {

    mainMenu() {
        var items = [
            {label: 'home', route: 'dashboard-index'},
            {label: 'branches', route: 'branches-list'},
            {label: 'new branch', route: 'branches-new'}
        ];

        return items.map((item) => Header.renderItem(item));
    }

    loginMenu() {
        var items = [
            {label: 'login', route: 'dashboard-login'},
            {label: 'register', route: 'dashboard-register'}
        ];

        return (
            <ul className="nav navbar-nav navbar-right">
                {items.map((item) => Header.renderItem(item))}
            </ul>
        );
    }

    /**
     * Render menu items
     *
     * @param item
     */
    static renderItem(item) {
        return <li key={item.route}><Link key={item.route} to={item.route}>{item.label}</Link></li>;
    }

    /**
     * Render component
     */
    render() {
        return (
            <nav className="navbar navbar-default ">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span key="toggle-nav" className="sr-only">Toggle navigation</span>
                            <span key="nav1" className="icon-bar"></span>
                            <span key="nav2" className="icon-bar"></span>
                            <span key="nav3" className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Bestcasting</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {this.mainMenu()}
                        </ul>
                        {this.loginMenu()}
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Header;