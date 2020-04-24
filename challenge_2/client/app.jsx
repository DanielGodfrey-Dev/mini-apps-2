import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';


class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            labels: [],
            datasets: [],

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
            Chart.defaults.global.defaultFontColor = 'white';
            let data = [{
                label: 'BPI (closing)',
                backgroundColor: 'rgb(57,255,20)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                fontColor: 'white',
                hoverBackgroundColor: [
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350',
                    '#003350'
                    ],
                data: Object.values(results.data.bpi)
            }];
            this.setState({ 
                labels: Object.keys(results.data.bpi),
                datasets: data,
                disclaimer: results.data.disclaimer,
                time: results.data.time
            });
            console.log(this.state.datasets[0]['data']);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    render() {
        return (
            <div>
                <div>{this.state.disclaimer}</div>
                <Bar
                data={this.state}
                options={{
                    title:{
                    display:true,
                    text:'Crypto BTC',
                    fontSize:78
                    },
                    legend:{
                    display:false,
                    position:'right'
                    }
                }}
                />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

