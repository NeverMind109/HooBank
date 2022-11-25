import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () =>  (
  <section className={`flex flex-col ${styles.paddingY} md:flex-row`} id="home">
    <div className={`flex-1 ${styles.flexStart} flex-col px-6 xl:px-0 sm:px-16`}>
      <div className="flex flex-row items-center py-[6px] px-2 bg-discount-gradient rounded-[10px] mb-2 md:px-4">
        <img className="w-[32px] h-[32px]" src={discount} alt="discount" />
        <p className={`${styles.paragraph} ml-2`}>
        <span className="text-white">20%</span> Discount For {" "}
        <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-semibold text-[45px] leading-[60px] text-white sm:text-[68px] sm:leading-[100px] ss:text-[50px] ss:leading-[75px]">
        The Next<br className="hidden sm:block"/> {" "}
        <span className="text-gradient">Generation</span> {" "}
        
        </h1>
        <div className="hidden mr-0 md:mr-4 ss:flex">
          <GetStarted />
        </div>
      </div>
      <h2 className="font-semibold w-full text-[45px] leading-[60px] text-white mb-5 sm:text-[68px] sm:leading-[100px] ss:text-[50px] ss:leading-[75px]">Payment Method.</h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
    </div>

    <div className={`relative flex flex-1 ${styles.flexCenter} my-10 md:my-0`}>
      <img className="relative z-[5] w-[100%] h-[100%]" src={robot} alt="Billing" />

        <div className="absolute top-0 z-[0] w-[40%] h-[35%] pink-gradient" />
        <div className="absolute bottom-40 z-[1] w-[80%] h-[80%] rounded-full white-gradient" />
        <div className="absolute bottom-20 right-20 z-[0] w-[50%] h-[50%] blue-gradient" />
    </div>

    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero