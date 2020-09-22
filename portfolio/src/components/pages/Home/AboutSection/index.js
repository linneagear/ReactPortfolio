import React from "react";
import avatar from "../../../../images/avatar.jpg"
import "./style.css";


function AboutSection() {

    return (
        <>
            <div className="container">
                <section class="about">
                <h3 className="aboutme_h3">About Me</h3>
                <br></br>
                    <div class="row">
                        
                        {/* About section with info text */}
                        <div className="col-sm-12 col-md-6">
                            <p className="aboutIntro">Hello! I'm Linnea, a software engineer based in Phoenix, Arizona.</p>
                            <p>Shortly after graduating from <b>Northern Arizona University</b>, I focused on programming as well as being a freelance digital artist.</p>
                            <p>I enjoy creating things and problem solving, whether that be websites or applications.</p>
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
                        <div className="col-sm-12 col-md-6">
                            <img src={avatar} className="avatarImg" alt="headshot portrait of myself" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutSection;