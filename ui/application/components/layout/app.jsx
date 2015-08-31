// vendor
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

// core
var Notification = require('components/layout/notification');
var Header = require('components/layout/header');

module.exports = React.createClass({

    render() {
        return (
            <div>
                <Header />
                <Notification/>
                <div id="wrapper">
                    <div id="sidebar-wrapper" className="col-md-1">
                        <div id="sidebar">
                            <ul className="nav list-group">
                                <li>
                                    <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 1</a>
                                </li>
                                <li>
                                    <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 2</a>
                                </li>
                                <li>
                                    <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 9</a>
                                </li>
                                <li>
                                    <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 10</a>
                                </li>
                                <li>
                                    <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 11</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="main-wrapper" className="col-md-11 pull-right">
                        <div id="main">
                            <RouteHandler />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});