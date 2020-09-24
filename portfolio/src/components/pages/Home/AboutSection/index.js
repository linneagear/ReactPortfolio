import React from "react";
import avatar from "../../../../images/portrait.jpg"
import "./style.css";


function AboutSection() {

    return (
        <>
            <div className="container">
                <section class="about">
                <h3 className="aboutme_h3">About Me</h3>
                <br></br>
                    <div className="row">
                        
                        {/* About section with info text */}
                        <div className="col-md-6 col-sm-12 col-xs-12 aboutIntro">
                            <p>Hello! I'm Linnea, a web developer based in Phoenix, Arizona.</p>
                            <p>Shortly after graduating from <b>Northern Arizona University</b> with a Bachelor's in Chemistry, I focused on freelance illustration work while working full time as a Formulations Specialist.</p>
                            <p>I am interested in all things software developement, whether that be design or server-side and data analytics.</p>
                            <p>Here are a few technologies I am familiar with:</p>
                            <ul className="skillsList">
                                <li>• Javascript</li>
                                <li>• React</li>
                                <li>• Node.js</li>
                                <li>• HTML + CSS</li>
                                <li>• MongoDB</li>
                                <li>• Express</li>
                            </ul>
                        </div>

                        {/* about section of my picture */}
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <img src={avatar} className="avatarImg" alt="headshot portrait of myself" loading="lazy"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutSection;