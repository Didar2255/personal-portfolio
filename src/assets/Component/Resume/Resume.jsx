import React from 'react'
import './Resume.css'
import { LuGraduationCap } from "react-icons/lu";
import { SlNotebook } from "react-icons/sl";

function Resume() {
    return (
        <div className='container'>
            <main className='row'>
                <div className="resume-section">
                    <h1>Resume</h1>
                </div>
                <section className='col'>
                    <header className='title'>
                        <LuGraduationCap className='graduation-icon' />
                        <h2>Education</h2>
                    </header>
                    <div className="content-section">
                        <div className="box">
                            <h4 className='years'>2018 - 2022</h4>
                            <div className="box-text">
                                <h3>Dhaka International University</h3>
                                <p className='subject'>BS.C in Computer Science and Engineering</p>
                                <hr />
                                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil cum modi hic beatae quae dolore inventore consequuntur optio voluptatem odio quas odit aliquam debitis sunt.</p>
                            </div>
                        </div>
                        <div className="box">
                            <h4 className='years'>2018 - 2022</h4>
                            <div className="box-text">
                                <h3>Dhaka International University</h3>
                                <p className='subject'>BS.C in Computer Science and Engineering</p>
                                <hr />
                                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil cum modi hic beatae quae dolore inventore consequuntur optio voluptatem odio quas odit aliquam debitis sunt.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='work-section mt-20'>
                    <header className='title m-8'>
                        <SlNotebook className='graduation-icon' />
                        <h2>Work History</h2>
                    </header>
                    <div className="content-section">
                        <div className="box">
                            <h4 className='years'>2018 - 2022</h4>
                            <div className="box-text">
                                <h3>UI/UX Design</h3>
                                <p className='subject'>Website Design</p>
                                <hr />
                                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil cum modi hic beatae quae dolore inventore consequuntur optio voluptatem odio quas odit aliquam debitis sunt.</p>
                            </div>
                        </div>
                        <div className="box">
                            <h4 className='years'>2018 - 2022</h4>
                            <div className="box-text">
                                <h3>Junior Web Designer</h3>
                                <p className='subject'>Product Designer</p>
                                <hr />
                                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil cum modi hic beatae quae dolore inventore consequuntur optio voluptatem odio quas odit aliquam debitis sunt.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Resume