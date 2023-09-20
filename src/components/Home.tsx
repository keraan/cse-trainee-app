//import React, { useRef, useState } from 'react'

type HomeProps = {
    scrollToHobbies: () => void
    scrollToSocials: () => void
    scrollToProjects: () => void
}

export default function Home({scrollToHobbies, scrollToSocials, scrollToProjects}: HomeProps) {
    return (
        <div className="page flex-column-center">
            <div className="page-content">
                <h1>Here's a few links to the rest of my page!</h1>
                {/* <p>I'm a 1st year computer science student</p> */}
                <div className="page-2-navigation">
                    <h3 className="nav-title" onClick={scrollToHobbies}>My Hobbies</h3>
                    <h3 className="nav-title" onClick={scrollToSocials}>My Socials</h3>
                    <h3 className="nav-title" onClick={scrollToProjects}>My Projects</h3>
                </div>
                
            </div>
        </div>
    )
}