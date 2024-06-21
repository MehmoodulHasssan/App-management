import SideBar from "./components/SideBar";
import PgCreation from "./components/PgCreation";
import StartingPage from "./components/StartingPage";
import ProjectDetails from "./components/ProjectDetails";
import { useState } from "react";

let currentProject;
function App() {
  const [isStartingPage, setIsStartingPage] = useState(true)
  const [isProjectDetails, setIsProjectDetails] = useState(false)
  const [isPgCreation, setIsPgCreation] = useState(false)
  const [projectData, setProjectData] = useState([])

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
        currentProject = item
      }
      handleDetails()
    }
    return;
  }

  // console.log(projectData)
  // console.log(currentProject)
  return (
    <div className="flex text-lg" >
      <SideBar viewDetails={viewDetails} newProject={projectData} onCreate={handleCreate} />
      {isStartingPage ? <StartingPage onCreate={handleCreate} /> : null}
      {isProjectDetails ? <ProjectDetails project={currentProject} /> : null}
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