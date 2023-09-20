import React, {useState} from 'react'
import greyDot from '../images/grey-circle.png'


type SocialProps = {
    title: string
    content: string
    link: string
}

function Social({title, link, content}:SocialProps) {
    return (
        <div>
        <a className='socials-link' href={link} target="_blank"><p>{title}</p></a>
        <p>{content}</p>
        </div>
    )
}

export default function Socials() {
    const [pages, setPages] = useState([
        <Social title="instagram" content="probably the best way to reach me" link="https://www.instagram.com/kieren.huynh/" />,
        <Social title="facebook" content="i found the cse trainee event on fb !" link="https://www.facebook.com/profile.php?id=100009972872870" />,
        <Social title="linkedin" content="if you want to offer me a job" link="https://www.linkedin.com/in/kieren-huynh/" />,
      ])
    const [currentPage, setCurrentPage] = useState(0)
    const [animation, setAnimation] = useState('')
    const [isAnimating, setIsAnimating] = useState(false)


    function nextPage() {
        if (isAnimating) return
        setIsAnimating(true)
        setAnimation('slide-out-right')
        const page = (currentPage + 1) % 3
        setTimeout(() => {
            setAnimation('slide-in-left');
            setCurrentPage(page)
          }, 400);
        setIsAnimating(false);  // Unlock navigation
    }

    function previousPage() {
        if (isAnimating) return
        setIsAnimating(true)
        setAnimation('slide-out-left'); // Set the animation
        const page = (currentPage - 1) < 0 ? pages.length - 1 : currentPage - 1
        setTimeout(() => {
            setAnimation('slide-in-right');
            setCurrentPage(page)
          }, 400);
        setIsAnimating(false);  // Unlock navigation
    }




    return (
        <div className="page flex-column-center">
            <div className="page-content socials-container">
                <h1 onClick={nextPage}>My Socials</h1>
                <div className={`socials-page ${animation}`}>{pages[currentPage]}</div>

                <div className="navigate-socials">
                    <div className="navigate-btn" onClick={previousPage}>&lt;</div>

                    {pages.map((_, index) => (
                        <img
                        className={`navigate-btn ${currentPage !== index ? 'inactive' : ''}`}
                        src={greyDot}
                        alt="Navigation Dot"
                        key={index}
                    />
                    ))}

                    <div className="navigate-btn" onClick={nextPage}>&gt;</div>
                </div>
            </div>
            
        </div>
    )
}