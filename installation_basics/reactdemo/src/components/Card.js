import image from './img_avatar.png'
import React, {Component} from 'react';
import styles from './card.module.css'

export default class Card extends Component {
    render(){
        return(<div className={styles.wrapper}>
            <div className={styles.card}>
                <img width="300px" src={image} alt="image" />
                <h2>John Doe</h2>
                <p>Architect & Engineer</p>  
            </div> 
        </div>)
    }
}

