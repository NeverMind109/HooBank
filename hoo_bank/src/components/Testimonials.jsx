import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section className={`relative ${styles.flexCenter} flex-col ${styles.paddingY}`} id="clients">
    <div className="absolute -right-[50%] z-[0] w-[60%] h-[60%] rounded-full blue-gradient" />
    <div className="relative z-[1] flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16">
      <h2 className={`${styles.heading2} mb-6 md:mb-0`}>What people are<br className="hidden sm:block"/>saying about us</h2>
      <div className="w-full">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>
    <div className="relative z-[1] flex flex-wrap justify-center w-full feedback-container sm:justify-start">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
)

export default Testimonials