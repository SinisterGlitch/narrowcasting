var React = require('react');
var Reflux = require('reflux');
var Request = require('services/request');

/**
 * User Reflux actions
 */
var UserActions = Reflux.createActions({
    loadUser: {children: ['completed','failed']}
});

UserActions.loadUser.listen((data)
    => Request.post('app_dev.php/api/login', {data: data}, UserActions.loadUser)
);

module.exports = UserActions;