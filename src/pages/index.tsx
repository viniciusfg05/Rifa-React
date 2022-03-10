import { CardsRaffle } from "../components/CardsRaffle";
import { Header } from "../components/Header";
import styles from './home.module.scss';
import { createServer } from 'miragejs'


createServer({
  routes() {
    this.namespace = 'api'; 

    this.get('/cards', () => {
      return [
        {
          id: 1,
          title: "Iphone 8 plus - R$ 8,00 cada número",
          images: [
            "https://m.media-amazon.com/images/I/61IJBsHm97L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61NYF7BxI8L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81HXViH8boL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/7161nwSVX9L._AC_SX679_.jpg"
          ]
        }
      ]
    }  )//quando ouver uma requisição do tipo get para a rota transactions
  }
})

export default function Home() {
  return (
    <>
      <Header />,

      <main>
        <div className={styles.containerCards}>
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
        </div>
      </main>
    </>
  )
}
