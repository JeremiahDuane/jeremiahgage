import Section from '../../Section';
import AcademiaDescriptionPane from './AcademiaDescriptionPane';
import AcademiaImagePane from './AcademiaImagePane';
import styles from './Academia.module.scss'
import image from '../../../../images/cofo.jpg'

function Academia(props) {
    const school = props.school
    return (
        <Section
            heading="academia"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Academia/"
            footerPath="/blob/master/src/Components/Software/Academia/Academia.js"
            description={props.descriptions.experience}
        >
            <div className={styles.academia}>
                <AcademiaDescriptionPane 
                    degree={school.degree}
                    majors={school.majors}
                    school={school.institution}
                    startDate={school.startDate}
                    endDate={school.endDate}
                    location={school.location}
                    description={school.description}
                    skills={school.skills}
                />
                <AcademiaImagePane image={image} institution={school.institution} location={school.location}/>
            </div>
        </Section>
    );
}

export default Academia;
