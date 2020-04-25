import React from 'react';
import ReactDOM from 'react-dom';
import { Pins4, Pins3, Pins2, Pins1 } from './pins.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pins: [
                [true, true, true, true],
                [true, true, true],
                [true, true],
                [true]
            ]
        }
    }

    render() {

        return (
            <div>
                <div>...LET'S BOWL</div>
                <Pins4 knock={this.state.pins[0]} />
                <Pins3 knock={this.state.pins[1]} />
                <Pins2 knock={this.state.pins[2]} />
                <Pins1 knock={this.state.pins[3]} />
            </div>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));