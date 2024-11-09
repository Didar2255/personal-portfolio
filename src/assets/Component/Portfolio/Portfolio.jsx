import React from 'react'
import './Portfolio.css'
import MonosaryGrid from './MonosaryGrid'
function Portfolio() {
    return (
        <div>
            <main>
                <section className='main-section'>
                    <div>
                        <header>
                            <title>
                                <h1>Portfolio</h1>
                            </title>
                        </header>
                        <div className="portfolio-nav">
                            <a href="#">All</a>
                            <a href="#">Graphic Design</a>
                            <a href="#">Mobile App</a>
                            <a href="#">Photography</a>
                            <a href="#">UI/UX Design</a>
                        </div>
                        <div className="photo-gallery columns-1 sm:columns-2 lg:columns-2 py-10 md:py-20 m-0">
                            <div className="figma mb-4">
                                <div>
                                    <h1>Figma MockUp</h1>
                                    <p>Figma MockUp PSD editable</p>
                                </div>
                            </div>
                            <MonosaryGrid />
                        </div>
                        <div className="main-card">
                            <div className="card mb-4">
                                <div>
                                    <h1>Website Design</h1>
                                    <p>Fitness Stdio Website</p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div>
                                    <h1>Photography</h1>
                                    <p>Photography Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Portfolio