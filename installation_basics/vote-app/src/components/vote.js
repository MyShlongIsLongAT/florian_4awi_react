import React, { Component } from 'react';
import styles from './vote.module.css';

class Vote extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        voteCounter:0,
        mouseOverCount:0
    }

    voted = () =>{
        this.setState({
            voteCounter: this.state.voteCounter+1
        })
    }

    mouseOver = () =>{
        this.setState({
            mouseOverCount: this.state.mouseOverCount+1
        })
    }

    render() { 
        return (  
            <div onClick={this.voted} className={styles.card} onMouseOver={this.mouseOver}>
                <h1>{this.props.candidateName}</h1>
                <h4>{this.props.candidateAddress}</h4>               
                <h2>{this.state.voteCounter}</h2>
                <h5>{this.state.mouseOverCount}</h5>
            </div>
        );
    }
}
 
export default Vote;