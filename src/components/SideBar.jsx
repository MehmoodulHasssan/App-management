export default function SideBar({ onCreate, newProject, viewDetails }) {
    return (
        <div id="sideBar" className="bg-black  p-7 w-1/3 h-screen mt-8 rounded-tr-xl">
            <div className="flex-col">
                <h2 className="text-2xl text-white  font-ptsans font-bold py-3">YOUR PROJECTS</h2>
                <button className="text-white bg-gray-600 p-2 font-ptsans rounded-lg my-4 hover:bg-gray-800" onClick={onCreate}>+ Add Project</button>
            </div>
            <ul className="flex-col">
                {newProject.map((project, index) => {
                    return <li onClick={() => viewDetails(index)} className="text-white mt-2 hover:bg-gray-600" key={index}>{project.title}</li>
                })}
                {/* <li className="text-white mt-2 hover:bg-gray-600" >Mongo DB</li> */}
            </ul>
        </div>
    )
} 