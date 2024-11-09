import React from 'react'
import NavBar from '../NavigationBar/NavBar'
import Header from '../Header/Header'
import Resume from '../Resume/Resume'
import Skill from '../Skill/Skill'
import Portfolio from '../Portfolio/Portfolio'
import Blog from '../Blog/Blog'


function Home() {
    return (
        <div>
            <NavBar />
            <Header />
            <Resume />
            <Skill />
            <Portfolio />
            <Blog />
        </div>
    )
}

export default Home