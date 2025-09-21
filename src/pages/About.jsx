function About(){
    return <div className="about">
        <h4>About Me</h4>
         <hr />
    <div className="about-page">
        <div>
            <img src="./images/aboutpic.jpg" alt="AboutBackground" />
        </div>
        <div className="about-info">
             <p>&nbsp; &nbsp; &nbsp; &nbsp;Hello! I'm <b className="name-m">Mani Varma</b>, a passionate <b>FrontEnd Developer</b> with a knack for creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and dynamic websites that captivate users.
        </p>
        <div className="info">
            <table  >
                <tr >
                    <th>Name</th>
                    <td>:</td>
                    <td className="detail">Mani Varma</td>
                </tr>
                 <tr>
                    <th>Email</th>
                    <td>:</td>
                    <td className="detail">manilucky25896@gmail.com</td>
                </tr>
                 <tr>
                    <th>Phone no</th>
                    <td>:</td>
                    <td className="detail">987xxxxxxxx</td>
                </tr>
                 <tr>
                    <th>Nationality</th >
                    <td>:</td>
                    <td className="detail">Indian</td>
                </tr>
                 <tr>
                    <th>Address</th>
                    <td>:</td>
                    <td className="detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, delectus!</td>
                </tr>
                   </table>
                <div className="buttons-about">              
                     <button className="cta-button">Hire Me</button>
                    <button className="download">Download CV</button>

                </div>
         
        </div>
        </div>
        </div>
    </div>;
}
export default About;