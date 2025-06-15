import React from 'react'

const Title = ({children, className}) => {
  return (
    <h1 className={` text-black text-[28px] ${className} `} >
        {children}
    </h1>
  )
}

export default Title