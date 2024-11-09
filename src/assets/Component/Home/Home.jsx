import React from 'react'
import NavBar from '../NavigationBar/NavBar'
import Header from '../Header/Header'
import Resume from '../Resume/Resume'
import Skill from '../Skill/Skill'
import Portfolio from '../Portfolio/Portfolio'


function Home() {
    return (
        <div>
            <NavBar />
            <Header />
            <Resume />
            <Skill />
            <Portfolio />
        </div>
    )
}

export default Home