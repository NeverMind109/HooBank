import styles from '../style'
import Button from './Button'

const CTA = () =>  (
  <section className={`flex-col ${styles.flexCenter} ${styles.padding} ${styles.marginY} bg-black-gradient-2 rounded-[20px] box-shadow sm:flex-row`}>
    <div className="flex flex-col flex-1 mb-10 sm:mb-0">
      <h2 className={`${styles.heading2} mb-5`}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className={`${styles.flexCenter} ml-0 sm:ml-10`}>
      <Button />
    </div>
  </section>
)

export default CTA