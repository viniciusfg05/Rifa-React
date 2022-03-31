import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
    const { data: session } = useSession()
    console.log(session)

    return session ? (
        <button
          className={styles.button}
          type="button"
        >
          Vinicius Ferreira
        </button>
      ) : (
        <button
          className={styles.button}
          type="button"
          onClick={() => signIn('google')}
        >
          Sign In with Google
        </button>
      )
} 


