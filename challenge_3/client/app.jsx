import React from 'react';
import ReactDOM from 'react-dom';
import { Pins4, Pins3, Pins2, Pins1 } from './pins.jsx';
import styles from './CSS/app.css';

const pinArray = [
    [true, true, true, true],
    [true, true, true],
    [true, true],
    [true]
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pins: pinArray
        }
    }

    render() {

        return (
            <div className={styles.centered}>
                
                <div>
                    <span style={{ color: 'white' }}>Wine Bowling</span>    <button>BOWL!</button>
                </div>

                <div>
                    <Pins4 knock={this.state.pins[0]} />
                    <Pins3 knock={this.state.pins[1]} />
                    <Pins2 knock={this.state.pins[2]} />
                    <Pins1 knock={this.state.pins[3]} />
                </div>
            
            </div>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));