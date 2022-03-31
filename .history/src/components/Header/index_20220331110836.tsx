import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/logo.svg" alt="Your Reffle" /> 
                <nav>
                    <button type="button" onClick={() => signIn('google')}>
                        Sing in with GitHub
                     </button>
                    <button>Criar Conta</button>
                </nav>
            </div>
        </div>
    )
}

