import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';



export function CardsRaffle() {

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
