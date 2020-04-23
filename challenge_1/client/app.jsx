import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            query: '',
            searchedTerm: '',
            page: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({query: event.target.value});
        console.log(this.state.query);
      }
    
    handleSubmit(event) {
        axios.get(`api/events?q=${this.state.query}&_page=${this.state.page}`)
        .then((results) => {
            let query = this.state.query;
            this.setState({ data: results.data, searchedTerm: query })
            console.log('success: ', this.state.data);
        })
        .catch((err) => {
            console.log(err);
        })
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <div>
                    <h1>Welcome to History. Be Forewarned.</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Query Historical Records:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.searchedTerm ? <div>You searched for <span style={{ color: 'red' }}>{this.state.searchedTerm}</span>...</div> : null}
            </div>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));