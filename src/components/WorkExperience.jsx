import { useState } from "react";
import '../styles/InputFields.css'


function WorkExperience({ workData, onChange }) {
  return (
    <section>
    <h3>Work Experience</h3>
    {/* These allow rerendering upon every keypress from the user end on the LHS of the interface, where the user INPUTS their CV information to be 'compiled'*/}
        
    {workData.map(entry => (
        <div key = {entry.id}>
            <div className = "inputGroup">
                <label>Start Date {' '}</label>
                <input 
                    value = {entry.startDate}
                    onChange = {e => onChange(entry.id, "startDate", e.target.value)}
                    type = "date"
                />
            </div>

            <div className = "inputGroup">
                <label>End Date {' '}</label>
                <input 
                    value = {entry.endDate}
                    onChange = {e => onChange(entry.id, "endDate", e.target.value)}
                    type = "date"
                />
            </div>

            <div className = "inputGroup">
            <label>Company Name {' '}</label>
                <input 
                    value = {entry.companyName}
                    onChange = {e => onChange(entry.id, "companyName", e.target.value)}
                    type = "text"
                    placeholder = "Company Name"
                />
            </div>
                
            <div className = "inputGroup">
            <label>Location {' '}</label>
                <input 
                    value = {entry.workLocation}
                    onChange = {e => onChange(entry.id, "workLocation", e.target.value)}
                    type = "text"
                    placeholder = "City"
                />
            </div>
            
            <div className = "inputGroup">
            <label>Role {' '}</label>
                <input
                    value = {entry.role}
                    onChange = {e => onChange(entry.id, "role", e.target.value)}
                    placeholder = "Intern"
                />                 
            </div>

            <div className = "inputGroup">
            <label>Description {' '}</label>
                <textarea
                    value = {entry.jobDesc}
                    onChange = {e => onChange(entry.id, "jobDesc", e.target.value)}
                    placeholder = "Optional"
                />                 
            </div>


        </div>
        ))}
        </section>
    );
}

export default WorkExperience
