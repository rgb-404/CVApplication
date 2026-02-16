# A One-Page Resume Builder using React
This is a basic webpage developed using React and Vite where users can create their own resume/CV for job applications.
Mostly a project to improve my React development skills and coding practices.

Accessible through: https://rgb-404-cvapplication.netlify.app/

***
## Main Deliverables
1. Designated fields for users to input their contact information for companies to access
2. Designated fields for users to input their education history
3. Designated fields for users to input their work experience
4. Designated fields for users to input their soft and technical skills
5. Functionality for users to view a pdf version of their Resume and download it

***
## Coding Practices
- Folder Structure: There's a components subdirectory and styles subdirectory to separate `.jsx` and `.css` components respectively
- Modularity: Each `.jsx` component will have its own file, which will be imported to `App.jsx` for the main render. `main.jsx` is responsible for loading the webpage
- Naming Conventions: All `.jsx` components/function names will be Capitalised CamelCase, and regular variables will follow conventional camelCase
- Inline Documentation: As this is primarily to improve my understanding of React, comments will explain a lot of the choices I make to focus on my understanding during this project.

***
## What I've Learned
While developing this webpage, I've learned:
- Basic utility of React Fundamentals: States, Hooks, Props (and when not to use them)
- Props are immutable as well as state, but since they're function parameters they're usually for the children to receive than the parent classes.
- Separating the Project: For each section of the CV, there's a class to edit the data (LHS), hold the data (App.jsx), and Render the data (RHS PDF)
- I've reinforced my understanding of how when your project evolves you'll need to restructure it (some places will need to be rewritten from the ground up)
- The Parent-Child structure in React: the child NEVER mutates the data for the parent (data never goes up through classes, only down through calls)
- App.jsx will render all the elements on any React project, the children simply trigger 'callback functions' which prompt the parent to rerender.

***
Some *smaller* things I've learned are:
- Javascript uses `class` usualy for HTML components. React uses `className`
- I properly understand that `A ? B : C` means if A then B else C
- I understand better that `map()` just iterates through the original array its being applied to, with the parameters within `map()` just being the syntax for each individual map iteration

***
### Next Steps
For now, I need to:
1. Rewrite the code 😞, I didn't realise the functionality I was originally planning for only supported ONE education and ONE work instace
    - To emphasise, I spent so long programming them to be arrays and the respective onChange impact, but saving and adding new instances which should be editable changes my foundations
2. Add a 'Soft Skills/Technical Skills section
