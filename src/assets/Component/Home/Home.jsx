import React from 'react'
import NavBar from '../NavigationBar/NavBar'
import Header from '../Header/Header'
import Resume from '../Resume/Resume'
import Skill from '../Skill/Skill'


function Home() {
    return (
        <div>
            <NavBar />
            <Header />
            <Resume />
            <Skill />
        </div>
    )
}

export default Home