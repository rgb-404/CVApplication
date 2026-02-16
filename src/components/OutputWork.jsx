// Read the OutputPersonal comment for more info: just renders education into pdf preview

// Like education, can only take the workData as parameter because its an array structure.
// Map iterates through the structure, and ID helps tell the difference for each entity
import '../styles/OutputDetails.css'

function OutputWork({ workData }) {
  return (
    <section className="workSection">
        <h2>Work Experience</h2>

        {workData.map(entry => (
            <div key = {entry.id} className = "workEntry">
            <div className = "workHeader">
                <div className = "duration">
                  <span>
                      {entry.startDate} - {entry.endDate}
                  </span>
                </div>

                <div className = "institution">{entry.companyName + ", " + entry.workLocation}</div>
                <div>{entry.role}</div>
  

            </div>

            <div>{entry.jobDesc}</div>

        </div>
      ))}
    </section>
  )
}

export default OutputWork