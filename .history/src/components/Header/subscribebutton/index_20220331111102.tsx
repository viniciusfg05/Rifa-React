import { signIn, useSession } from "next-auth/react"
import styles from './styles.module.scss'

export function SubscribeButton() {
  
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
