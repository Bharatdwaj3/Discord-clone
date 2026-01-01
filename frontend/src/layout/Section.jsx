import React from 'react'

const Section = ({children, bgClass="bg-amber-900"}) => {
  return (
    <>
        <div className={`h-[500px] p-0 m-0 w-[1523px] ${bgClass}`}>
          {children}
        </div>
    </>
  )
}

export default Section