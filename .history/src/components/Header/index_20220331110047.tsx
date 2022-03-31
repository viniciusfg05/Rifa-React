import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
  const { data: session } = useSession()

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/logo.svg" alt="Your Reffle" /> 
                <nav>
                 session ? (
                    <button type="button" onClick={() => signIn('google')}>
                        Sing in with Google
                    </button>
                    <button>
                        Criar Conta
                    </button>
                  ) : (
                    <button type="button" onClick={() => signIn('google')}>
                        Sing in with Google
                    </button>
                    <button>
                        Criar Conta
                    </button>
                  )
                </nav>
            </div>
        </div>
    )
}


