function Resume(){
    return(
        <div className="resume">
            <h4>Resume</h4>
            <hr />
           <div className="resume-sub">
             <div className="education">
                <h5>Education</h5>
                <hr />
                <p><b>Bachelor of Science in Computer Science</b></p>
                <p>XYZ University, 2018 - 2022</p>
                <br />
                <p><b>High School Diploma</b></p>
                <p>ABC High School, 2016 - 2018</p>
            </div>
            <div className="experience">    
                <h5>Experience</h5>
                <hr />
                <p><b>Software Developer Intern</b></p>
                <p>Tech Solutions, June 2021 - August 2021</p>
                <ul>
                    <li>Assisted in developing web applications using React and Node.js.</li>
                    </ul>
            </div>
           </div>
        </div>
    )
}

export default Resume;