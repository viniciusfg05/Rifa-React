import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';



export function CardsRaffle() {

    useEffect(() => {
        fetch('http://localhost:3000/api/cards')
        .then(response => response.json())
        .then(data => console.log(data))
      }, [])

    return (
        <div className={styles.headerContainer}>
            <section>
                <div className={styles.imgContainer}>
                    <img className="image"src="/Iphone8PlusRosa.jpg" alt="" />
                </div>
                <p>Iphone 8 plus - R$ 8,00 cada número</p>
                <div className={styles.buttonContainer}>
                    <button>Adiquirir</button>
                </div>
            </section>
        </div>
    )
}
