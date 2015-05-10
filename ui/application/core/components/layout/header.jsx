var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default">Left</button>
                <button type="button" className="btn btn-default">Middle</button>
                <button type="button" className="btn btn-default">Right</button>
            </div>
        );
    }
});

module.exports = Header;