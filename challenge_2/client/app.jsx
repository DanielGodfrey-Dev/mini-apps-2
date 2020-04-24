import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bpi: null,
            disclaimer: null,
            time: null
        }
    }

    componentDidMount() {
        axios.post('/api/BTC', {
            start: '2013-09-01',
            end: '2013-09-10'
        })
        .then((results) => {
            this.setState({ 
                bpi: results.data.bpi,
                disclaimer: results.data.disclaimer,
                time: results.data.time
            });
            console.log(this.state);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    render() {
        return (

            <div>we have arrived.</div>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

