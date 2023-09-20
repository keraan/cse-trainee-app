import { useRef } from 'react'
import logo from '../images/logo.svg'
import downArrow from '../images/white-arrow.png'
import Socials from './Socials'
import Home from './Home'
import Hobbies from './Hobbies'
import Projects from './Projects'


type FirstPartProps = {
    scrollToHome: () => void;
}

function FirstPart({scrollToHome}: FirstPartProps) {
    return (
        <>
            <div className="page page-1">
                <h1>Kieren Huynh</h1>
                <div>
                    <img src={logo} className="App-logo"/>
                </div>
                <div className="scroll-down-container" onClick={scrollToHome}>
                    <p className="scroll-down">Scroll Down</p>
                    <img src={downArrow} className="App-down-arrow"/>
                </div>
            </div>
        </>
    )
}


export default function Body() {
    const homeRef = useRef<HTMLDivElement>(null)
    const hobbiesRef = useRef<HTMLDivElement>(null)
    const socialsRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)

    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    const scrollToHobbies = () => {
        hobbiesRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    const scrollToSocials = () => {
        socialsRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <>
            <div><FirstPart scrollToHome={scrollToHome}/></div>
            <div ref={homeRef}><Home scrollToHobbies={scrollToHobbies} scrollToSocials={scrollToSocials} scrollToProjects={scrollToProjects}/></div>
            <div ref={hobbiesRef}><Hobbies /> </div>
            <div ref={socialsRef}><Socials /></div>
            <div ref={projectsRef}><Projects /></div>
        </>
    )
}
