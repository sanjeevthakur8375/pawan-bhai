import React from 'react'
const contactbox=[
  {
   id:1,
   img:`./assets/icon/email.png`,
   heading:`Email Address`,
   para:`Info@Infiniteitsolutions.Net`,  
},
{
  id:1,
  img:`./assets/icon/phone-call.png`,
  heading:`Phone Number`,
  para:`9643674679`,  
},
{
  id:1,
  img:`./assets/icon/location.png`,
  heading:`Address`,
  para:`D-1/200 gali no-6 sonia vihar delhi-110094`,  
}
]
 
export const ContactBox = () => {
  return (
     <>
     <div className="ContctBox mt-top mt-btm">
       <div className="container">
          <div className="flex justBetween alinCenter">
              {
              contactbox.map((curEl)=>{
                 return(
                  <div className="box" key={curEl.id}>
                     <img src={curEl.img} alt="email" />
                     <h3>{curEl.heading}</h3>
                     <p>{curEl.para}</p>
                    </div>
                 )
              })
              }
          </div>
       </div>
     </div>
     </>
  )
}
