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

const bowling = () => {
    console.log('bowling!')
    let round = pinArray;

    const toggle = () => {
        let decide = (Math.floor(Math.random() * 2));
        let retVal = false;

        switch(decide) {
            case 0:
                retVal = true;
                break;
            case 1:
                retVal = false;
                break;
        }
        return retVal;
    };

    for (let i = 0; i < round.length; i++) {
        for (let j = 0; j < round[i].length; j++) {
            round[i][j] = toggle();
        }
    }

    return round;
};

const score = (round) => {
    let score = 0;

    for (let i = 0; i < round.length; i++) {
        for (let j = 0; j < round[i].length; j++) {
            if (!round[i][j]) {
                score++;
            }
        }
    }
    return score;
};



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pins: pinArray,
            score: 0,
            status: ''
        }
        this.bowl = this.bowl.bind(this);
    }

    bowl() {
        let round = bowling();

        let exist = this.state.score;
        let scoreRound = score(round);
        let newScore = exist + scoreRound;

        this.setState({ pins: round, score: newScore })

        setTimeout(() => {
            const reset = [
                [true, true, true, true],
                [true, true, true],
                [true, true],
                [true]
            ];
            this.setState({ pins: reset});
        }, 700);

        let x = this.state.score;
        switch (true) {
            case (x < 20):
                this.setState({ status: 'TERRIBLE' })
                break;
            case (x < 40):
                this.setState({ status: 'POOR' })
                break;
            case (x < 60):
                this.setState({ status: 'FAIR' })
                break;
            case (x < 80):
                this.setState({ status: 'GOOD' })
                break;
            case (x < 100):
                this.setState({ status: 'GREAT' })
                break;
            case (x < 200):
                this.setState({ status: 'AWESOME' })
                break;
        }
    }

    render() {

        return (
            <div className={styles.centered}>
                
                <div>
                    <span style={{ color: 'white' }}>Wine Bowling</span><button onClick={this.bowl}>BOWL!</button>
                    <div className={styles.score}>Score: 
                    <span style={{color: 'rgb(47, 255, 99)'}}>
                        {this.state.score}
                        <br/>{this.state.status}</span>
                    </div>
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