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
        front: "",
        back: ""
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