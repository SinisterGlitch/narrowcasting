var Reflux = require('reflux');
var DashboardActions = require('core/modules/actions/dashboard');


module.eports = Reflux.createStore({

    defaultData: {},

    init() {
        this.listenTo(DashboardActions.loadDefault, 'loadDefaultCompleted');
    },

    loadDefaultCompleted(data) {
        console.log('completed', data);
        this.defaultData = data;
        this.trigger(data);
    },

    getDefaultData() {
        return this.defaultData;
    }
});