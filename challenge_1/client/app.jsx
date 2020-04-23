import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {

        return (
            <div>Welcome to History. Be Forewarned.</div>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));