/* 

This class is to display the details of the user's personal info, once inputted from the PersonalInfo.jsx and headed to App.jsx
The reason all parts of the CV have their own version of this is for simplicity sake;
1. helps reduce the number of parameters per function call by splitting them up across three .jsx files
2. helps with comprehension when using this project. you can better understand where everything comes and goes, each output has their own regular

this COULD technically be consolidated into 'ResumePreview.jsx' alongside the other Output.jsx's, but that would be more messy I think.

*/

import '../styles/OutputDetails.css'

function OutputPersonal({ name, email, contact, location, portfolio }) {
    
    
    return (
        <div className = "personalSection">
            <h1 className = "usersName">{name || "Your Name"}</h1>

            <div className = "usersDetails">
                <div className = "email">
                    {email}
                </div>
                <div className = "contact">
                    {contact}
                </div>
                <div className = "location">
                    {location}
                </div>
                <div className = "portfolio">
                    {portfolio}
                </div>
            </div>
        </div>
    )
}

export default OutputPersonal;