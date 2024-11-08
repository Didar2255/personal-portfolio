import React from 'react'
import './Skill.css'

function Skill() {
    return (
        <div className='skill'>
            <main>
                <section>
                    <header className='skill-title'>
                        <h1>Skill</h1>
                    </header>
                    <div>
                        <li>
                            <h3>UI/UX Design</h3>
                            <span className='bar'>
                                <span className='design'>

                                </span>
                            </span>
                        </li>
                        <li>
                            <h3>Photography</h3>
                            <span className='bar'>
                                <span className='photography'>

                                </span>
                            </span>
                        </li>
                        <li>
                            <h3>Creativity</h3>
                            <span className='bar'>
                                <span className='creativity'>

                                </span>
                            </span>
                        </li>
                        <li>
                            <h3>Team Work</h3>
                            <span className='bar'>
                                <span className='teamWork'>

                                </span>
                            </span>
                        </li>
                        <li>
                            <h3>Web Design</h3>
                            <span className='bar'>
                                <span className='webDesign'>

                                </span>
                            </span>
                        </li>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Skill