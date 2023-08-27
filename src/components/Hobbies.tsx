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
                <h1>my hobbies</h1>
                <p>let me assure you i am a normal person who has hobbies.</p>
                <p>these include:</p>
                <div className="hobbies-container">
                    <Hobby title="Tricking" content={"i can do a backflip.\n need i say more"}/>
                    <Hobby title="Bouldering" content="i climb rocks"/>
                    <Hobby title="Motorcycling" content="until i lost my license." />
                </div>
            </div>
        </div>
    )
}
