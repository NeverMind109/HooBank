import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-3 rounded-[20px] feature-card ${index !== features.length - 1 ? "mb-6" : "mb-0"} md:p-6`}>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] bg-dimBlue rounded-full mr-5`}>
      <img className="w-[50%] h-[50%] object-contain" src={icon} alt="Icon" />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h3 className="font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h3>
      <p className="font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)

const Business = () =>  (
  <section className={layout.section} id="features">
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} mb-5`}>You do the business, <br className="hidden sm:block" /> we'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mb-10`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

      <Button />
    </div>
    <div className={`flex-col ${layout.sectionImg}`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} index={index} {...feature} />
      ))}
    </div>
  </section>
)

export default Business