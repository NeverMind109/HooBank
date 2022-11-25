import React from 'react'

const Button = ({ styles }) => (
  <button className={`font-medium text-[18px] text-primary py-4 px-6 bg-blue-gradient rounded-[10px] outline-none ${styles}`} type="buttton">
    Get started
  </button>
)

export default Button