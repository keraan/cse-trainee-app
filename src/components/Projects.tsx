
type projectProps = {
    project: string,
    description: string
    link: string
}
function Project({project, description, link}: projectProps): any {
    return (
        <div className="project">
            <h2>{project}</h2>
            <p>{description}</p>
            <a className="project-link" href={link} target="_blank">{link}</a>
        </div>

    )
}

export default function Projects() {
    return (
        <div className="page flex-column-center">
            <div className="page-content">
                <h1>My Projects</h1>
                <p>I haven't made anything super notable, but here are a couple:</p>
                <div className="projects-container">
                    <Project project="Battleship" description="A small web-app battleship game that can be played locally against a bot." link="https://keraan.github.io/battleship/"/>
                    <Project project="Timesheet Sender" description="An app that semi-automatically fills in my weekly working hours and sends them to my boss" link="https://github.com/keraan/timesheet-sender"/>
                    <Project project="Capitol Computer Website" description="Currently solely responsible for managing the CapitolComputer webstore" link="https://capitolcomputer.com.au/" />
                </div>
            </div>
        </div>
    )
}
