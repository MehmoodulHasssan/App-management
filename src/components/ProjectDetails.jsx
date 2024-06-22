import { useState, useRef } from "react"
import dateFormat, { masks } from "dateformat";

export default function ProjectDetails({ project, addTask, removeTask, handleDelete }) {
    const [taskValue, setTaskValue] = useState('')
    let date = useRef()
    // const [taskArr, setTaskArr] = useState()
    // const taskRefs = useRef([])
    if (project.date !== undefined) {
        const d = new Date(project.date)
        // console.log(d.toString().substring(4, 16))
        date = dateFormat(d, "longDate")
    }

    // function addTask() {
    //     setTaskArr(prevTask => [...prevTask, taskValue])
    //     setTaskValue('')
    // }
    // function removeTask(taskIndex) {
    //     // const text = taskRefs.current[0].innerText.replace('Clear', '')
    //     setTaskArr(prev => prev.filter((_, index) => index !== taskIndex))
    // }
    console.log(project.tasks)
    // console.log(taskRefs.current[0].innerText.replace('Clear', ''))
    return (
        <div className="w-full p-7 mt-8 text-lg font-ptsans">
            <div className="flex flex-col">
                <div className="flex justify-between mt-6">
                    <h2 className="font-bold text-4xl ">{project.title}</h2>
                    <button onClick={() => handleDelete(project)} className="bg-white text-black w-20 rounded-md hover:bg-black hover:text-white">Delete</button>
                </div>
                <p className="">{date}</p>
                {/* <p className="mt-3">Learn React from group up</p> */}
                <p className="mt-3">{project.description}.</p>
                <div className=" h-1 mt-3 bg-gray-600"></div>
                <h2 className="font-bold text-4xl mt-4">Tasks</h2>
                <div className="flex mt-4">
                    <input onChange={(e) => (setTaskValue(e.target.value))} className="p-1 bg-gray-200" type="text" value={taskValue} />
                    <button onClick={() => {
                        taskValue === '' ? alert('Please enter a value') :
                            addTask(taskValue)
                        setTaskValue('')
                    }} className="p-1 ml-2 text-black rounded-md hover:bg-black hover:text-white">Add Task</button>
                </div>
                <ul className={!project.tasks || project.tasks.length === 0 ? null : "mt-8 p-5 bg-gray-200"}>
                    {project.tasks ? project.tasks.map((task, index) => {
                        return <li key={index} className="flex justify-between mt-2">
                            {task}
                            <button onClick={() => removeTask(task, taskValue)} className="hover:text-gray-600">Clear</button>
                        </li>
                    }) : null}


                </ul>

            </div>
        </div>
    )
}


//ref={el => taskRefs.current[index] = el}