// Read the OutputPersonal comment for more info: just renders education into pdf preview

// Like work, can only take the educationData as parameter because its an array structure.
// Map iterates through the structure, and ID helps tell the difference for each entity
import '../styles/OutputDetails.css'

function OutputEducation({ educationData }) {
  return (
    <section className="educationSection">
        <h2>Education</h2>

        {educationData.map(entry => (
            <div key = {entry.id} className = "educationEntry">
            <div className = "educationHeader">
                <div className = "duration">
                  <span>
                      {entry.startDate} - {entry.endDate}
                  </span>
                </div>
                
                <div className = "institution">
                  <div>{entry.uniName + " - " + entry.courseName || " "}</div>
                </div>
                  
                  <div>{entry.grade}</div> 
            </div>

            <div>{entry.courseDesc}</div>

        </div>
      ))}
    </section>
  )
}

export default OutputEducation