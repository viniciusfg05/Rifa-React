import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react'
import { SubscribeButton } from './subscribebutton';

export function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/logo.svg" alt="Your Reffle" /> 
                <SubscribeButton/>
            </div>
        </div>
    )
}

