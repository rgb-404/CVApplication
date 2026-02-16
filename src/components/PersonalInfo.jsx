import { useState } from 'react'
import '../styles/InputFields.css'

// Responsible for 'handling the change', by alerting App.jsx to make the change. Hence why it has the props of data and what to do onChange (hook)
function PersonalInfo({ personalData, onChange}) {
  return (
    <section>
        <h3>Personal Information</h3>
        {/* These allow rerendering upon every keypress from the user end on the LHS of the interface, where the user INPUTS their CV information to be 'compiled'*/}
        <div className = "inputGroup" id = "nameEntry">
            <label>Name {' '}</label>
            <input 
                data-key = "name" // identifier, there for all fields
                value = {personalData.name}
                onChange = {onChange} // We can do this because onChange is already appropriately defined in App.jsx, so it's just reallocating the onChange here to there.
                type = "text"
                placeholder = "Joe Schmoe"
            />
        </div>

        <div className = "inputGroup" id = "emailEntry">
            <label>Email Address {' '}</label>
            <input 
                data-key = "email"
                value = {personalData.email}
                onChange = {onChange}
                type = "text"
                placeholder = "abc123@gmail.com"
            />
        </div>

        <div className = "inputGroup" id = "contactEntry">
            <label>Contact {' '}</label>
            <input 
                data-key = "contact"
                value = {personalData.contact}
                onChange = {onChange}
                type = "text"
                placeholder = "+44 xxxx xxxxxx"
            />
        </div>
        
        <div className = "inputGroup" id = "locationEntry">
            <label>Location {' '}</label>
            <input 
                data-key = "location"
                value = {personalData.location}
                onChange = {onChange}
                type = "text"
                placeholder = "City/State, Country"
            />
        </div>
        
        <div className = "inputGroup" id = "githubEntry">
            <label>Portfolio {' '}</label>
            <input 
                data-key = "portfolio"
                value = {personalData.portfolio}
                onChange = {onChange}
                type = "text"
                placeholder = "www.xyz.com"
            />
        </div>

    </section>
  )
}

/*
This file displays the current information on the webpage on this section, from it being passed as a prop from App.jsx. It's more 'user end' since it's a part of where the user typing happens, and where the fields get displayed from (hence the HTML)

It does NOT change the data, it simply is in charge of: 
1. showing the current state at all times
2. alerting App.jsx when a change is appropriate (this is the purpose of onChange).
3. giving App.jsx the information of WHAT changes (key) and WHAT its changed to (from user end). This is what props does, lets this file compare the props state with webpage state.

The Props being passed in are just for this file to help identify which fields are being edited by the user, which it tells App.jsx + The new data. That's all
*/

export default PersonalInfo