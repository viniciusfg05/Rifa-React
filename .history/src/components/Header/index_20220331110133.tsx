import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/logo.svg" alt="Your Reffle" /> 
                <nav>
                    <button type="button" onClick={() => signIn('google')}>
                        Sing in with Google
                     </button>
                    <button>Criar Conta</button>
                </nav>
            </div>
        </div>
    )
}


return session ? (
    <button
      className={styles.button}
      type="button"
    >
      <FaGithub color="#04d361"/>
      Vinicius Ferreira
      <FiX color="#737380"/>
    </button>
  ) : (
    <button
      className={styles.button}
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sign In with GitHub
    </button>
  )
} 