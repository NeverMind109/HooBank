import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between max-w-[370px] px-5 py-5 rounded=[20px] mr-0 my-5 feedback-card md:px-10 md:py-12 md:mr-10 sm:mr-5">
    <img className="w-[42px] h-[27px] object-contain" src={quotes} alt="Double quotes" />
    <p className="font-normal text-white text-[18px] leading-[32px] my-10">{content}</p>
    <div className="flex flex-row">
      <img className="w-[48px] h-[48px] rounded-full" src={img} alt={name} />
      <div className="flex flex-col ml-4">
        <h3 className="font-semibold text-white text-[20px] leading-[32px]">{name}</h3>
        <span className="font-normal text-dimWhite text-[16px] leading-[24px]">{title}</span>
      </div>
    </div>
  </div>
)

export default FeedbackCard