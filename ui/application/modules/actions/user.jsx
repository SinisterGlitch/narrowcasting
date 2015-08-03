var React = require('react');
var Reflux = require('reflux');
var Request = require('services/request');

/**
 * User Reflux actions
 */
var UserActions = Reflux.createActions({
    loadUser: {children: ['completed','failed']},
    postUser: {children: ['completed','failed']},
});

UserActions.loadUser.listen((data)
    => Request.post('app_dev.php/api/users/login', {data: data}, UserActions.loadUser)
);

UserActions.postUser.listen((data)
    => Request.post('app_dev.php/api/users', {data: data}, UserActions.postUser)
);

module.exports = UserActions;