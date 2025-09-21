function Contact(){
    return <div className="contact">
        <h4>Contact Me</h4>
        <hr />
    <div className="contact-page">
        <div className="contact-info">
            <b>I'd like to hear from you!</b>
             <p>&nbsp; &nbsp; &nbsp; &nbsp;if you have any questions or just want to chat, feel free to reach out to me at <br /><br /><br />
                 <b className="name-m">manilucky25896@gmail.com</b></p>
                 <div className="social-media">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                 </div>
        </div>
              <form action="">
                <div>
                    <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div>
                    
                    <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div>
    
                    <textarea id="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
                   </div>
    </div>;
}
export default Contact;
