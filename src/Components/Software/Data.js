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
    Docker,
    MathAndPhysicsClub,
    SigmaZeta,
    EducationalTestingService,
    AssociationForComputingMachinery
} from "../../imgs/SVGs"

const urls = {
    Wikipedia: {
        SOLID: "https://simple.wikipedia.org/wiki/SOLID_(object-oriented_design)#SOLID_Principles"
    },
    EducationalTestingService: "https://www.ets.org/mft/about/test-content.html",
    AssociationForComputingMachinery: "https://www.acm.org/",
    CollegeOfTheOzarks: "https://www.cofo.edu/",
    SigmaZeta: "https://sigmazeta.org/"
}

const skills = {
    JavaScript: {subtitle: "JavaScript", image:JavaScript()},
    HTML5: {subtitle: "HTML 5", image:HTML5()},
    JQuery: {subtitle: "jQuery", image:JQuery()},
    VueJS: {subtitle: "VueJS", image:Vue()},
    GoogleTagManager: {subtitle: "GTM", tooltip: "Google Tag Manager", image:GoogleTagManager()},
    DynamoDB: {subtitle: "DynamoDB", image:DynamoDB()},
    ReactJs: {subtitle: "ReactJS", image:React()},
    TypeScript: {subtitle: "TypeScript", image:TypeScript()},
    Telerik: {subtitle: "KendoUI", image:Telerik()},
    DotNetCore: {subtitle: ".NET Core", image:DotNetCore()},
    LaTeX: {subtitle: "LaTeX", image:LaTeX()},
    Mathematica: {subtitle: "Mathamatica", tooltip: "Wolfram Mathematica", image:Mathematica()},
    PSPP: {subtitle: "PSPP", image:PSPP()},
    MatLab: {subtitle: "MatLab", image:MatLab()},
    Geogabra: {subtitle: "Geogabra", image:Geogabra()},
    GoLang: {subtitle: "GoLang", image:GoLang()},
    Thymeleaf: {subtitle: "Thymeleaf", image:Thymeleaf()},
    Docker: {subtitle: "Docker", image:Docker()},
}
const decorations = {
    MathAndPhysicsClubPresident: {title: "President", dates:"2019-2020", subtitle: "Math & Physics Club", link:urls.CollegeOfTheOzarks, image:MathAndPhysicsClub()},
    SigmaZetaPresident: {title: "President", dates:"2020", subtitle: "ΣΖ Honor Society", tooltip: "Sigma Zeta Honor Society Beta-Phi Chapter", link: urls.SigmaZeta, image:SigmaZeta()},
    MajorFieldExam: {title: "189/200", dates:"2020", subtitle: "Major Field Exam", tooltip: "Major Field Exam for Mathematics", link: urls.EducationalTestingService, image:EducationalTestingService()},
    AssociationForComputingMachinery: {title: "Vice-President", dates:"2018-2019", subtitle: "ACM Club", tooltip: "Association for Computing Machinery", link: urls.AssociationForComputingMachinery, image:AssociationForComputingMachinery()},
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
                    <p>
                        Some would say a good software developer writes good code. I would posit that good code writes itself. 
                        Through the minimazation of redundancy by commitment to 
                        &nbsp;<a href={urls.Wikipedia.SOLID} target="_blank" rel="noreferrer" onClick={(e) => {e.stopPropagation()}}>SOLID</a>&nbsp;
                        priciples, and the reuse of code through component libraries, the development required by developers tends to zero. A good developer, then, can hardly be characterized
                        as a developer at all, rather, a thinker, a creator, an engineer. 
                    </p>
                    <br/>
                    <p>
                        This portfolio is a small example of good code. Do you want to take a closer look? Click anywhere in this pane to begin. 
                    </p>
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
                description: <p>
                    Worked as a lab assistant in the College's mathematics department. Assisted in instructing students in the areas of Calculus, Discrete Math, Trigonometry, and Statistics.
                </p>,
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
                description: <p>
                    Worked as a sales advocate with Gateway Wireless LLC, a Cricket Wireless authorized retailer. Acted with a team and individually to advocate the Cricket brand and to perform sales. Developed connections through customer interactions to create an integrated sales network. 
                </p>,
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
                    <p>Worked as both crew member and cashier.</p>
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
const school = {
    degree: "Bachelor's Degree",
    majors: ["Mathematics & Computer Science"],
    description: <>
        <ul>
            <li>Received a liberal arts degree. Has proficiency in the arts, including expressing oneself orally and through composition.</li>
            <li>Earned a major in Computer Science. Has a vast experience with computer systems and programming with both higher-level and lower-level languages.</li>
            <li>Acquired a second major in Mathematics. Has the ability to solve complex problems through computational analysis, including but not limited to problems involving: Trigonometry, Calculus, Number Theory, Physics, and Statistics.</li>
        </ul>
    </>,
    institution: "College of the Ozarks",
    location: "Point Lookout, Missouri",
    startDate: new Date(2015, 8),
    endDate: new Date(2020, 5),
    skills: [
        decorations.MajorFieldExam,
        decorations.MathAndPhysicsClubPresident,
        decorations.SigmaZetaPresident,
        decorations.AssociationForComputingMachinery
    ],
}
const data = {experiences, descriptions, urls, school}
export default data;