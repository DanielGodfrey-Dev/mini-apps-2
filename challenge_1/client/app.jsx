import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            query: 'Macedonia',
            page: 1
        }
    }

    componentDidMount() {
        axios.get(`api/events?q=${this.state.query}&_page=${this.state.page}`)
        .then((results) => {
            this.setState({ data: results.data })
            console.log('success: ', this.state.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {

        return (
            <div>Welcome to History. Be Forewarned.</div>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));