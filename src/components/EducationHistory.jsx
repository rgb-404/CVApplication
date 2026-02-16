import { useState } from "react"
import '../styles/InputFields.css'


function EducationHistory({ educationData, onChange }) {
  return (
    <section>
    <h3>Education</h3>
    {/* These allow rerendering upon every keypress from the user end on the LHS of the interface, where the user INPUTS their CV information to be 'compiled'*/}

      {educationData.map(entry => ( // 'entry' is one object inside the array of Education objects, so map just goes through all the "entries"
        <div key = {entry.id}> 
        {/* ^ is for React to uniquely identify each 'entry' in the list being mapped one by one */}
          <div className = "inputGroup">
            <label>Start Date</label>
            <input
              value = {entry.startDate}
              onChange = {e => onChange(entry.id, "startDate", e.target.value)} // the relevant info for each field onChange: object ID, the field ID being changed, the new value. All fed to App.jsx to change the new value
              type = "date"

            />
          </div>
          
          <div className = "inputGroup">
            <label>End Date</label>
            <input
              value = {entry.endDate}
              onChange = {e => onChange(entry.id, "endDate", e.target.value)}
              type = "date"
            />
          </div>

          <div className=  "inputGroup">
            <label>University Name</label>
            <input
              value = {entry.uniName}
              onChange = {e => onChange(entry.id, "uniName", e.target.value)}
              type = "text"
              placeholder = "University of ABC"
            />
          </div>

          <div className = "inputGroup">
            <label>Course</label>
            <input
              value = {entry.courseName}
              onChange = {e => onChange(entry.id, "courseName", e.target.value)}
              type = "text"
              placeholder = "BSc/BA (Hons) xyz"
            />
          </div>

          <div className = "inputGroup">
            <label>Grade</label>
            <input
              value = {entry.grade}
              onChange = {e => onChange(entry.id, "grade", e.target.value)}
              type = "text"
              placeholder = "1:1, 4.0, x%, ..."
            />
          </div>
          <div className = "inputGroup">
            <label>Description {' '}</label>
                <textarea
                    value = {entry.courseDesk}
                    onChange = {e => onChange(entry.id, "courseDesc", e.target.value)}
                    placeholder = "Optional"
                />                 
            </div>


        </div>
      ))}
    </section>
  );
}

export default EducationHistory;
