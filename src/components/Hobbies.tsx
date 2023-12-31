//import React, { useRef, useState } from 'react'

function Hobby({title, content}: {title: string, content: string}) {
    return (
        <div className="hobby">
            <h3>{title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
        </div>
    )
}


export default function Hobbies() {
    return (
        <div className="page flex-column-center">
            <div className="page-content">
                <h1>My Hobbies</h1>
                <p>Let me assure you, I am a normal person who has hobbies besides coding.</p>
                <p>These include:</p>
                <div className="hobbies-container">
                    <Hobby title="Tricking" content={"I can do a backflip. Anyway, you'd see me weekly at UNSW's Tricking Society every tuesday."}/>
                    <Hobby title="Bouldering" content={"I typically go bouldering once a week :) If you're interested in joining me, feel free to message me on instagram or messenger!"}/>
                    <Hobby title="Motorcycling" content={"I go for rides on Saturdays with a couple of my mates and we just go explore wherever."} />
                </div>
            </div>
        </div>
    )
}
