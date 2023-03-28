import {
    DotNetCore, 
    HTML5, 
    JavaScript, 
    Telerik, 
    TypeScript, 
    DynamoDB, 
    React, 
    Vue, 
    GoogleTagManager, 
    JQuery, 
    LaTeX, 
    Mathematica, 
    PSPP, 
    MatLab, 
    Geogabra, 
    GoLang, 
    Thymeleaf,
    Docker
} from "../../imgs/SVGs"

const urls = {
    wikipedia: {
        SOLID: "https://simple.wikipedia.org/wiki/SOLID_(object-oriented_design)#SOLID_Principles"
    }
}

const skills = {
    JavaScript: {name: "JavaScript", image:JavaScript()},
    HTML5: {name: "HTML 5", image:HTML5()},
    JQuery: {name: "jQuery", image:JQuery()},
    VueJS: {name: "VueJS", image:Vue()},
    GoogleTagManager: {name: "Google Tag Manager", image:GoogleTagManager()},
    DynamoDB: {name: "AWS DynamoDB", image:DynamoDB()},
    ReactJs: {name: "ReactJS", image:React()},
    TypeScript: {name: "TypeScript", image:TypeScript()},
    Telerik: {name: "Kendo UI", image:Telerik()},
    DotNetCore: {name: ".NET Core", image:DotNetCore()},
    LaTeX: {name: "LaTeX", image:LaTeX()},
    Mathematica: {name: "Mathamatica", image:Mathematica()},
    PSPP: {name: "PSPP", image:PSPP()},
    MatLab: {name: "MatLab", image:MatLab()},
    Geogabra: {name: "Geogabra", image:Geogabra()},
    GoLang: {name: "GoLang", image:GoLang()},
    Thymeleaf: {name: "Thymeleaf", image:Thymeleaf()},
    Docker: {name: "Docker", image:Docker()},
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
                        &nbsp;<a href={urls.wikipedia.SOLID} target="_blank" rel="noreferrer" onClick={(e) => {e.stopPropagation()}}>SOLID</a>&nbsp;
                        priciples, and the reuse of code through component libraries, the development required by developers tends to zero. A good developer, then, can hardly be characterized
                        as a developer at all, rather, a thinker, a creator, an engineer. 
                    </h3>
                    <br/>
                    <h3>
                        This portfolio is a small example of good code. Do you want to take a closer look? Click anywhere in this pane to begin. 
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
                startDate: new Date(2022, 2, 1),
                //endDate: "", 
                location: "Remote",
                description: <>
                    <ul>
                        <li>Plans, documents, develops, and tests computer software by applying knowledge of programming techniques and computer systems.</li>
                        <li>Writes clean, semantic HTML and CSS in conjunction with client-side JavaScript frameworks. </li>
                    </ul>
                </>,
                skills: [
                    skills.HTML5, 
                    skills.VueJS,
                    skills.TypeScript,
                    skills.JQuery,
                    skills.GoogleTagManager,
                    skills.JavaScript,
                    skills.Thymeleaf,
                    skills.Docker,
                ]
            }
        ]
    },
    {
        employer: "Netsmart",
        positions: [
            {
                title: "Software Engineer",
                jobType: "Full-time",
                startDate: new Date(2020, 6, 1),
                endDate: new Date(2022, 2, 1), 
                location: "Springfield, MO",
                description: <>
                    <ul>
                        <li>Participates in the software development life cycle including requirement analysis, planning, software design, development, review, testing and deployment.</li>
                        <li>Run software tests, review results and perform root cause analyses to identify problems. </li>
                        <li>Identify, implement and support technical solutions to deliver business requirements</li>
                    </ul>
                </>,
                skills: [
                    skills.DynamoDB,
                    skills.ReactJs,
                    skills.TypeScript,
                    skills.Telerik,
                    skills.DotNetCore,
                    skills.GoLang,
                    skills.GoogleTagManager,
                    skills.HTML5, 
                    skills.JavaScript,
                    skills.JQuery,
                ]
            }
        ]
    },
    {
        employer: "College of the Ozarks",
        positions: [
            {
                title: "Math and Physics Teacher's Aide",
                jobType: "Part-time",
                startDate: new Date(2017, 8, 1),
                endDate: new Date(2020, 5, 1), 
                location: "Point Lookout, MO",
                description: <>
                    Worked as a lab assistant in the College's mathematics department. Assisted in instructing students in the areas of Calculus, Discrete Math, Trigonometry, and Statistics.
                </>,
                skills: [
                    skills.LaTeX,
                    skills.Mathematica,
                    skills.PSPP,
                    skills.MatLab,
                    skills.Geogabra,
                ]
            }
        ]
    },
    {
        employer: "Self-Employed",
        positions: [
            {
                title: "Private Mathematics Tutoring",
                jobType: "Full-time",
                startDate: new Date(2017, 8, 1),
                endDate: new Date(2019, 8, 1), 
                location: "Branson, MO",
                description: <>
                    <ul>
                        <li>Assists high school students in the field of mathematics. Works with the following courses: Algebra I, Trigonometry, Pre-calculus </li>
                        <li>Meets with students weekly, developing needed skills and bringing students to a higher academic understanding </li>
                    </ul>
                </>,
                skills: []
            }
        ]
    },
    {
        employer: "Gateway Wireless LLC",
        positions: [
            {
                title: "Sales Advocate",
                jobType: "Full-time",
                startDate: new Date(2018, 5, 1),
                endDate: new Date(2018, 8, 1), 
                location: "Branson, MO",
                description: <>
                    Worked as a sales advocate with Gateway Wireless LLC, a Cricket Wireless authorized retailer. Acted with a team and individually to advocate the Cricket brand and to perform sales. Developed connections through customer interactions to create an integrated sales network. 
                </>,
                skills: []
            }
        ]
    },
    {
        employer: "Cold Stone Creamery",
        positions: [
            {
                title: "Crew Member",
                jobType: "Part-time",
                startDate: new Date(2015, 2, 1),
                endDate: new Date(2017, 8, 1), 
                location: "Branson, MO",
                description: <>
                        Worked as both crew member and cashier. 
                    <ul>
                        <li>Acted as a receptionist while managing the cash register. Greeted guests and took their orders. </li>
                        <li>Worked as a server by preparing food and serving it to guests. </li>
                    </ul>
                </>,
                skills: []
            }
        ]
    }
]

const data = {experiences, descriptions, urls}
export default data;