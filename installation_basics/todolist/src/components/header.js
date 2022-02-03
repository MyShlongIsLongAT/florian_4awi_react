import React, { Component } from 'react';
import styles from './header.modules.css';

class Header extends Component {
    render() { 
        return (  
            <div>
                <div className={styles.headerText}>
                    <h1>ToDoS</h1>
                </div>
            </div>
        );
    }
}
 
export default Header;