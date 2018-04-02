var React = require('react');

var Navigation = require('./common/navigation');
var Main = require('./main');

class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <h1>React Router Demo</h1>
                <Navigation/>
                <Main/>
            </div>

        )
    }
};

module.exports = App;