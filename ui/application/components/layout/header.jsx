var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Notification = require('components/layout/notification');
var Login = require('components/layout/login');

/**
 * Header component
 */
module.exports = React.createClass({

    mainMenu() {
        var items = [
            {label: 'home', route: 'dashboard-index'},
            {label: 'branches', route: [
                {route: 'branches-list'},
                {route: 'branches-new'}
            ]}
        ];

        return items.map((item) => this.renderItem(item));
    },

    loginMenu() {
        var items = [
            {label: 'login', route: 'dashboard-login'},
            {label: 'register', route: 'dashboard-register'}
        ];

        return (
            <ul className="nav navbar-nav navbar-right">
                {items.map((item) => this.renderItem(item))}
            </ul>
        );
    },

//
//<nav className="navbar navbar-default ">
//    <div className="container">
//        <div className="navbar-header">
//            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//                <span key="toggle-nav" className="sr-only">Toggle navigation</span>
//                <span key="nav1" className="icon-bar"></span>
//                <span key="nav2" className="icon-bar"></span>
//                <span key="nav3" className="icon-bar"></span>
//            </button>
//            <a className="navbar-brand" href="#">Bestcasting</a>
//        </div>
//        <div id="navbar" className="navbar-collapse collapse">
//            <ul className="nav navbar-nav">
//                {this.mainMenu()}
//            </ul>
//            {this.loginMenu()}
//        </div>
//    </div>
//</nav>

    /**
     * Render menu items
     *
     * @param item
     */
    renderItem(item) {
        console.log('test', item);
        if (typeof item.route == 'object') {

        } else {
            return    <li><a href="#">Navbar Item 1</a></li>
        }

        //return <li key={item.route}><Link key={item.route} to={item.route}>{item.label}</Link></li>;

        var name = 'Navbar Item 2';

        return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{name}<b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Navbar Item2 - Sub Item 1</a></li>
                </ul>
            </li>
        );
    },

    /**
     * Render component
     */
    render() {
        return (
        <div id="header" className="navbar navbar-default navbar-fixed-top">
            <div className="navbar-header">
                <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    <i className="icon-reorder"></i>
                </button>
                <a className="navbar-brand" href="#">
                    BestCasting
                </a>
            </div>
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    {this.mainMenu}
                </ul>
                <ul className="nav navbar-nav pull-right">
                    <li className="dropdown">
                        <a href="#" id="nbAcctDD" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-user"></i>Username<i className="icon-sort-down"></i></a>
                        <ul className="dropdown-menu pull-right">
                            <li><a href="#">Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
});