//import React, { useRef, useState } from 'react'

type HomeProps = {
    scrollToHobbies: () => void
    scrollToSocials: () => void
}

export default function Home({scrollToHobbies, scrollToSocials}: HomeProps) {
    return (
        <div className="page flex-column-center">
            <div className="page-content">
                <h1>Hi, I'm Kieren</h1>
                <p>I'm a 1st year computer science student</p>
                <div className="page-2-navigation">
                    <h3 className="nav-title" onClick={scrollToHobbies}>my hobbies</h3>
                    <h3 className="nav-title" onClick={scrollToSocials}>my socials</h3>
                    <h3 className="nav-title">my projects</h3>
                </div>
                
            </div>
        </div>
    )
}