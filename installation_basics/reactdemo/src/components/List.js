import React, {Component} from 'react';
import styles from './List.module.css';

export default class List extends Component{
    render(){
        return (<div className={styles.List}>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Beer</li>
            </ul>
            
        </div>)
    }
}

