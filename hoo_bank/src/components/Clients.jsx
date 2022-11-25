import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div className={`flex-1 ${styles.flexCenter} min-w-[120px] m-1 sm:min-w-[192px]`} key={client.id}>
          <img className="w-[100px] object-contain sm:w-[192px]" src={client.logo} alt="client" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients