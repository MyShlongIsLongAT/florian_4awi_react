import React, { Component } from 'react';
import { GrClose } from "react-icons/gr";


import styles from './todo.module.css'

class ToDo extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className={styles.container}>
                <div>{this.props.name}</div>
                <div className={styles.icons}><GrClose/></div>
            </div>
         );
    }
}
 
export default ToDo;