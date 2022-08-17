import React from 'react'

 const Innerbanner = (prop) => {
  return (
      <section className="innerbanner ">
             <div className="container">
                   <h2>{prop.heading}</h2>
             </div>
      </section>
  )
}
export default Innerbanner
