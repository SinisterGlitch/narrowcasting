var React = require('react');
var Reflux = require('reflux');
var Request = require('services/request');

/**
 * User Reflux actions
 */
var UserActions = Reflux.createActions({
    loadUser: {children: ['completed','failed']}
});

UserActions.loadUser.listen(()
    => Request.post('app_dev.php/api/user/get/4325', UserActions.loadUser, data)
);

module.exports = UserActions;