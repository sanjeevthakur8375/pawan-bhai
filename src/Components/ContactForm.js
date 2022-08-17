import React from 'react'

export const ContactForm = () => {
  return (
     <div className="contactform">
        <div className="container">
            <div className="flex alinCenter flex-wrap">
            <div className="left">
                  <img src="../assets/img/contact.jpg" alt="contact" className="img-fluid"/>
        </div>
        <div className="right">
            <form action="php" className="form">
                <div className="flex justBetween flex-wrap">
                <div className="form-group">
                    <input type="text" placeholder="First Name"/>
                    <img src="../assets/icon/name.png" alt="name" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name"/>
                    <img src="../assets/icon/name.png" alt="name" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Email"/>
                    <img src="../assets/icon/emailm.png" alt="name" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Phone Number"/>
                    <img src="../assets/icon/phone-book.png" alt="name" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Address"/>
                    <img src="../assets/icon/adress.png" alt="name" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Enter Your Company Name"/>
                    <img src="../assets/icon/company.png" alt="name" />
                </div>
                <div className="form-group">
                    <textarea name="" id="" cols="30" rows="10"placeholder="Message"></textarea>
               
                </div>
                </div>
                <input type="submit" />
            </form>
        </div>
            </div>
        </div>
     </div>
  )
}
