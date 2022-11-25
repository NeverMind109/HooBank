import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section className={layout.sectionReverse} id="product">
    <div className={layout.sectionImgReverse}>
      <img className="relative z-[5] w-[100%] h-[100%]" src={bill} alt="Billing" />
      <div className="absolute -left-1/2 top-0 z-[3] w-[50%] h-[50%] rounded-full white-gradient" />
      <div className="absolute -left-1/2 bottom-0 z-[0] w-[50%] h-[50%] rounded-full pink-gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} mb-5`}>Easily control your <br className="hidden sm:block" /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mb-6 sm:mb-10`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className="flex flex-row flex-wrap">
        <img className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" src={apple} alt="Apple Store Icon" />
        <img className="w-[128px] h-[42px] object-contain cursor-pointer" src={google} alt="Play Market Icon" />
      </div>
    </div>
  </section>
)

export default Billing