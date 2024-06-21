import SideBar from "./components/SideBar";
import PgCreation from "./components/PgCreation";
import StartingPage from "./components/StartingPage";
import ProjectDetails from "./components/ProjectDetails";
import { useState } from "react";

// let currentProject;
function App() {
  const [isStartingPage, setIsStartingPage] = useState(true)
  const [isProjectDetails, setIsProjectDetails] = useState(false)
  const [isPgCreation, setIsPgCreation] = useState(false)
  const [projectData, setProjectData] = useState([])
  const [currentProject, setCurrentProject] = useState([])


  function handleCreate() {
    setIsStartingPage(false)
    setIsProjectDetails(false)
    setIsPgCreation(true)
  }
  function handleBackHome() {
    setIsStartingPage(true)
    setIsProjectDetails(false)
    setIsPgCreation(false)
  }
  function handleDetails() {
    setIsStartingPage(false)
    setIsProjectDetails(true)
    setIsPgCreation(false)
  }


  function outputData(datas) {
    setProjectData(prevData => [...prevData, datas])
    handleBackHome()
    return;
  }

  function viewDetails(key) {
    for (const item of projectData) {
      if (projectData.indexOf(item) === key) {
        setCurrentProject(item)
      }
      handleDetails()
    }
    return;
  }
  function addTask(taskValue) {
    setProjectData(prev => {
      // Map through the previous state to create a new array
      return prev.map(item => {
        // Check if the current item is the project we want to update
        if (item.title === currentProject.title) {
          // Create a new item with the updated tasks
          return {
            ...item,
            tasks: item.tasks ? [...item.tasks, taskValue] : [taskValue]
          };
        }
        // Return the item as is if it's not the project we're updating
        return item;
      });
    });
    // currentProject.tasks.push(taskValue)
    !currentProject.tasks ? currentProject.tasks = [taskValue] : currentProject.tasks.push(taskValue)
    return;
  }

  function removeTask(task) {
    setProjectData((prev) => {
      return prev.map(item => {
        if (item.title === currentProject.title) {
          return {
            ...item,
            tasks: [item.tasks.filter((kaam) => kaam !== task)]
          }
        }
        return item
      })
    })
    currentProject.tasks = currentProject.tasks.filter((kaam) => kaam !== task)
  }
  function handleDelete(project) {
    setProjectData((prev) => {
      return prev.filter(item => item.title !== project.title)
    })
    // console.log(project)
    handleBackHome()
  }

  // console.log(projectData)
  // console.log(currentProject)

  // console.log(projectData)
  // console.log(currentProject)
  return (
    <div className="flex text-lg" >
      <SideBar viewDetails={viewDetails} newProject={projectData} onCreate={handleCreate} />
      {isStartingPage ? <StartingPage onCreate={handleCreate} /> : null}
      {isProjectDetails ? <ProjectDetails handleDelete={handleDelete} removeTask={removeTask} addTask={addTask} project={currentProject} /> : null}
      {isPgCreation ? <PgCreation onCreate={handleCreate} onCancel={handleBackHome} catchData={outputData} /> : null}

    </div>
  );
}

export default App;

//Its home page content
{/* <div className="w-screen flex justify-center items-center">
<div className="flex flex-col items-center">
  <img className="w-20 h-20" src="logo.png" alt="no-project img" />
  <h2 className="text-2xl text-gray-900  font-ptsans font-bold py-3">No Project Selected</h2>
  <p className="font-ptsans">Select a project or get started with a new one</p>
  <button className="px-3 py-2 mt-5 bg-black text-white font-ptsans rounded-lg">Create new project</button>
</div>
</div> */}


//NewCreation

// <div className="w-full mt-8 text-lg">
// <div className="flex flex-col p-7 font-ptsans mr-80">
//   <div className="flex justify-end mt-2">
//     <button className="bg-white text-black  py-2 w-20 rounded-md hover:bg-black hover:text-white">Cancel</button>
//     <button className="bg-white text-black  py-2 w-20 rounded-md hover:bg-black hover:text-white">Save</button>
//   </div>
//   <div className="mt-3">
//     <label className="block font-bold">
//       TITLE
//     </label>
//     <input type="text" className="bg-gray-200 p-2 w-full" />
//   </div>
//   <div className="mt-3">
//     <label className="block font-bold">
//       DESCRIPTION
//     </label>
//     <textarea name="descrition" className=" bg-gray-200 w-full p-2"></textarea>
//   </div>
//   <div className="mt-3">
//     <label className="block font-bold">
//       DATE
//     </label>
//     <input type="date" className=" bg-gray-200 w-full p-2" />
//   </div>
// </div>
// </div>