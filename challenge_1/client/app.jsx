import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

window.React = React;

export class EventList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    let eventNodes = this.props.data.map(function(event, index) {
      return <div key={index}>{event.event}</div>;
    });

    return (
      <div id="events" className="eventList">
        <ul>{eventNodes}</ul>
      </div>
    );
  }
}

class App extends React.Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        perPage: PropTypes.number.isRequired,
      };

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            query: '',
            searchedTerm: '',
            offset: 0,
            pageCount: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadEventsFromServer = this.loadEventsFromServer.bind(this);
    }

    loadEventsFromServer() {
      axios.get(`api/events?q=${this.state.query}&_page=${this.state.offset}`)
        .then((results) => {
            console.log(data);
            let query = this.state.query;
            this.setState({ 
                data: results.data, 
                searchedTerm: query,
                pageCount: Math.ceil(results.data.meta.total_count / results.data.meta.limit),})
            console.log('success: ', this.state.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };


    handleChange(event) {
        this.setState({query: event.target.value});
      }
    
    handleSubmit(event) {
        this.loadEventsFromServer();
        event.preventDefault();
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);
    
        this.setState({ offset: offset }, () => {
          this.loadCommentsFromServer();
        });
      };

    render() {

        return (
            <div>
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

                    <div className="commentBox">
                    <EventList data={this.state.data} />
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                    </div>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));