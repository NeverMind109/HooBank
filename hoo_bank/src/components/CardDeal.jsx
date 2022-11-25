import { card } from '../assets';
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} mb-5`}>Find a better card deal <br className="hidden sm:block" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mb-10`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button />
      </div>
      <div className={layout.sectionImg}>
        <img className="w-[100%] h-[100%]" src={card} alt="Card" />
      </div>
    </section>
)

export default CardDeal