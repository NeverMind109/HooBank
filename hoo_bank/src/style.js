const styles = {
  boxWidth: "w-full xl:max-w-[1280px]",

  heading2:
    "font-poppins font-semibold text-[36px] text-white leading-[46px] w-full xs:text-[40px] xs:leading-[67px] sm:text-[48px] sm:leading-[76px]",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[31px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "px-6 sm:px-16",
  paddingY: "py-6 sm:py-16",
  padding: "px-6 py-4 sm:px-16 sm:py-12",

  marginX: "mx-6 sm:mx-16",
  marginY: "my-6 sm:my-16",
};

export const layout = {
  section: `flex flex-col ${styles.paddingY} md:flex-row`,
  sectionReverse: `flex flex-col-reverse ${styles.paddingY} md:flex-row`,

  sectionImgReverse: `relative flex flex-1 ${styles.flexCenter} mr-0 mt-10 md:mt-0 md:mr-10`,
  sectionImg: `relative flex flex-1 ${styles.flexCenter} ml-0 mt-10 md:mt-0 md:ml-10`,

  sectionInfo: `flex-col flex-1 ${styles.flexStart}`,
};

export default styles;
