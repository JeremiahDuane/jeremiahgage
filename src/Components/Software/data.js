const urls = {
    wikipedia: {
        SOLID: "https://simple.wikipedia.org/wiki/SOLID_(object-oriented_design)#SOLID_Principles"
    }
}

const descriptions = {
    skills: {
        front: "Here are some of the skills I have accumulated over the years.",
        back: "The Skills component leverages GitHub's public api to render the data."
    },
    projects: {
        front: "Here are some of the projects I have completed over the years",
        back: "This is how it works."
    },
    about: {
        front: <>
                    <h3>
                        Some would say a good software developer writes good code. I would posit that good code writes itself. 
                        Through the minimazation of redundancy by commitment to 
                        &nbsp;<a href={urls.wikipedia.SOLID} target="_blank" onClick={(e) => {e.stopPropagation()}}>SOLID</a>&nbsp;
                        priciples, and the reuse of code through component libraries, the development required by developers tends to zero. A good developer, then, can hardly be characterized
                        as a developer at all, rather, a thinker, a creator, an engineer. 
                    </h3>
                    <h3>
                        This portfolio is a small example of such code. Do you want to take a closer look? Click anywhere in this pane to begin. 
                    </h3>
                </>,
        back: <>
                <p>
                    This is a glimpse of how this pane works. This is a static page, so nothing too fancy. Using a custom React.js/JSX component, this file needs only be 13 lines long.
                </p>
                <p>
                For more information, check out the GitHub. 
                </p>
            </>
    },
    experience: {
        front: "",
        back: ""
    }
}
const experiences = [
    {
        employer: "O'Reilly Technology Services",
        positions: [
            {
                title: "UI / UX Developer II",
                jobType: "Full-time",
                startDate: "Feb 2022",
                //endDate: "", 
                location: "Remote",
                description: <p>
                    - Plans, documents, develops, and tests computer software by applying knowledge of programming techniques and computer systems.
                    - Writes clean, semantic HTML and CSS in conjunction with client-side JavaScript frameworks. 
                </p>
            }
        ]
    }
]

export { descriptions, experiences };