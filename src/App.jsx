import { useState } from 'react'
import './styles/App.css'
import PersonalInfo from './components/PersonalInfo.jsx'
import EducationHistory from './components/EducationHistory.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import ResumePreview from './components/ResumePreview.jsx'


function App() {
  /* 
    Stores all fields per category (personal, education, work...) accessible by a single 'useState' hook (per category) under the state of data 'personalData'. 
    Accessible by state.field, so personalData.name...
  */
  const [personalData, setPersonalData] = useState({
      name: "",
      email: "",
      contact: "",
      location: "",
      portfolio: "",
  })

  // Education and Work are REALLY SIMILAR since they just have different fields. I started the project with separate files though so I'm keeping it like that.
  const [educationData, setEducationData] = useState([
    {
      id: crypto.randomUUID(),
      startDate: "",
      endDate: "",
      uniName: "",
      courseName: "",
      grade: "",
      courseDesc: "",
    },
  ]);
  
  
  const [workData, setWorkData] = useState([
    {
      id: crypto.randomUUID(),
      startDate: "",
      endDate: "",
      companyName: "",
      workLocation: "",
      role: "",
      jobDesc: "",
    },
  ]);
  


  
  
  
  // choosing 'handle' because this goes to PersonalInfo.jsx, which doesn't actually 'CHANGE' the variable. App.jsx 'changes', by replacing the current state w/ new ones to be rendered.
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset; // key to identify which field is being edited, passed into PersonalInfo.jsx
    const value = e.target.value; // new value the user inputs on the user-end
    
    setPersonalData(prevState => ({ ...prevState, [key]: value })); // initiates the state change. notice the syntax of [key]: value, it imitates the proper syntax to set a variable
  }
  
  
  
  
  // Different to handlePersonalInfoChange because we're dealing with an array of objects, not just one object.
  function handleEducationChange(id, key, value) {
    setEducationData(prev => // map collects all Education objects input by user and builds a new array
      prev.map(entry =>
        entry.id === id
        ? { ...entry, [key]: value } // basically if entry.id == id then alert EducationHistory.jsx that this is what to look for and find new user inputs for, the rest should stay as 'entry'
        : entry
      )
    );
  }
  
  
  function handleWorkChange(id, key, value) {
    setWorkData(prev => 
      prev.map(entry =>
        entry.id === id
        ? { ...entry, [key]: value }
        : entry
      )
    );
  }

  
  return (
    <>
      <div className = "app">
        <div className = "editorBar">
        
          <div className = "sectionEditor">
            <PersonalInfo

              /*
              personalData works instead of using all values BECAUSE:
              1. this format matches the prop format in PersonalInfo.jsx
              2. syntax is the same as the variables in this file, so we're sending the personalData state and handler to help PersonalInfo.jsx identify 
              - the format of a new state (personalData near the top)
              - what/where to change respectively (handler with key and newValue so PersonalInfo.jsx knows WHERE to look to find the new stuff)
              */

              personalData = {personalData}
              onChange = {handlePersonalInfoChange}
            />
          </div>
          
          <div className = "sectionEditor">
            <EducationHistory 
              educationData = {educationData}
              onChange = {handleEducationChange}
            />
          </div>
        

          <div className = "sectionEditor">
            <WorkExperience 
              workData = {workData}
              onChange = {handleWorkChange}
            />
          </div>

        </div>


        <div className = "preview">
        <ResumePreview 
          personalData = {personalData}
          educationData = {educationData}
          workData = {workData}
          />
        </div>

      </div>
    </>
  )
}

export default App


