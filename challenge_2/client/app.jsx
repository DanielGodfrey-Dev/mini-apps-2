import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log('cyber currency data preparing to initialize...')
    }

    render() {
        return (

            <div>we have arrived.</div>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

