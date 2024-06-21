import { useState, useRef } from "react"


export default function ProjectDetails({ project }) {
    const [taskValue, setTaskValue] = useState('')
    const [taskArr, setTaskArr] = useState([])
    // const taskRefs = useRef([])


    function addTask() {
        setTaskArr(prevTask => [...prevTask, taskValue])
        setTaskValue('')
    }
    function removeTask(taskIndex) {
        // const text = taskRefs.current[0].innerText.replace('Clear', '')
        setTaskArr(prev => prev.filter((_, index) => index !== taskIndex))
    }
    // console.log(taskRefs.current[0].innerText.replace('Clear', ''))
    return (
        <div className="w-full p-7 mt-8 text-lg font-ptsans">
            <div className="flex flex-col">
                <div className="flex justify-between mt-6">
                    <h2 className="font-bold text-4xl ">{project.title}</h2>
                    <button className="bg-white text-black w-20 rounded-md hover:bg-black hover:text-white">Delete</button>
                </div>
                <p className="">{project.date}</p>
                {/* <p className="mt-3">Learn React from group up</p> */}
                <p className="mt-3">{project.description}.</p>
                <div className=" h-1 mt-3 bg-gray-600"></div>
                <h2 className="font-bold text-4xl mt-4">Tasks</h2>
                <div className="flex mt-4">
                    <input onChange={(e) => (setTaskValue(e.target.value))} className="p-1 bg-gray-200" type="text" value={taskValue} />
                    <button onClick={addTask} className="p-1 ml-2 text-black rounded-md hover:bg-black hover:text-white">Add Task</button>
                </div>
                <ul className={taskArr.length !== 0 ? "mt-8 p-5 bg-gray-200" : null}>
                    {taskArr.map((task, index) => {
                        return <li key={index} className="flex justify-between mt-2">
                            {task}
                            <button onClick={() => removeTask(index)} className="hover:text-gray-600">Clear</button>
                        </li>
                    })}


                </ul>

            </div>
        </div>
    )
}


//ref={el => taskRefs.current[index] = el}