import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="Lcontainer">
            <div className="Lrow">
                <div className="footer-col-1">
                    <h3 className='text-xl font-extrabold'>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div className="app-logo">
                        <img src="images/appstore.jpg" />
                        <img src="images/playstorre.jpg" />
                    </div>
                </div>
                <div className="footer-col-2">
                    <img src="https://botw-pd.s3.amazonaws.com/onlineshopping.png"/>
                    <p>Our purpose is to Sustainably Make the pleasure and Benefits of Sports Accessible to the many.</p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copyright">Copyright 2024 - Group3</p>
        </div>
    </div>
    </>
  )
}

export default Footer
