import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
    <h2 className="visually-hidden">Our Statistic</h2>
    {stats.map(stat => (
      <div className="flex flex-1 flex-row items-center justify-start m-3" key={stat.id}>
        <h3 className="font-semibold text-[30px] leading-[43px] text-white xs:text-[40px] xs:leading-[53px]">{stat.value}</h3>
        <p className="font-normal text-[15px] leading-[21px] text-gradient uppercase ml-3 xs:text-[20px] xs:leading-[26px]">{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats