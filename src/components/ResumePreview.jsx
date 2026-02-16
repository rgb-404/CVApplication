import OutputPersonal from './OutputPersonal'
import OutputEducation from './OutputEducation'
import OutputWork from './OutputWork'
import '../styles/ResumePreview.css'


// This is a greater class to help render all the 'Output___.jsx' files.
function ResumePreview({ personalData, educationData, workData}) {
    return (
        <div className = "resumePreview">
            <OutputPersonal
                name = {personalData.name}
                email = {personalData.email}
                contact = {personalData.contact}
                location = {personalData.location}
                portfolio = {personalData.portfolio}
            />


            <OutputEducation 
                educationData = {educationData}
            />

            <OutputWork 
                workData = {workData}
            />

        </div>
    )
}

export default ResumePreview