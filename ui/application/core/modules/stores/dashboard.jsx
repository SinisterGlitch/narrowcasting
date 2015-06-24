var Reflux = require('reflux');
var DashboardActions = require('core/modules/actions/dashboard');

module.eports = Reflux.createStore({

    defaultData: {},

    init() {
        this.listenTo(DashboardActions.loadDefault, 'loadDefaultCompleted');
    },

    loadDefaultCompleted(data) {
        console.log('data', data);
        console.log('completed');
        this.defaultData = 'it almost works';
        this.trigger();
    },

    getDefaultData() {
        return this.defaultData;
    }
});