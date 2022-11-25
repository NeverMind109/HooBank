import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () =>  (
  <footer className={`flex-col ${styles.flexCenter} ${styles.paddingY}`}>
    <h2 className="visually-hidden">Footer</h2>
    <div className={`flex-col ${styles.flexStart} w-full mb-8 md:flex-row`}>
      <div className="flex flex-col flex-1 justify-start mr-10 mt-10 md:mt-0">
        <img className="w-[266px] h-[72px] object-contain mb-4" src={logo} alt="HooBank Logo" />
        <p className={`${styles.paragraph} max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="flex flex-row flex-[1.5] flex-wrap justify-between w-full">
        {footerLinks.map((footerLink, index) => (
          <div className="flex flex-col min-w-[150px] my-4 ss:my-0" key={"Footer-list " + index}>
            <h3 className="font-medium text-[18px] leading-[27px] text-white mb-4">{footerLink.title}</h3>
            <ul className="list-none">
              {footerLink.links.map((link, index) => (
                <li 
                className={`font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer ${index !== footerLink.links.length-1 ? 'mb-4' : 'mb-0'} hover:text-secondary`} 
                key={link.name + index}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col items-center justify-between w-full pt-6 border-t-[1px] border-t-[#3f3e45] md:flex-row">
      <p className="font-normal text-center text-[18px] leading-[27px] text-dimWhite mb-6 md:mb-0">Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
      <ul className="flex flex-row list-none">
        {socialMedia.map((social, index) => (
          <li 
          className={`${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`} 
          key={social.id}>
            <img className="w-[21px] h-[21px] object-contain cursor-pointer" src={social.icon} alt={social.id}/>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)

export default Footer