import { useState } from "react"

let data = {
    title: null,
    description: null,
    date: null,
    tasks: []
}
export default function PgCreation({ catchData, onCancel }) {
    // const [data, setData] = useState()
    const [title, setTitle] = useState({ title: null })
    const [description, setDescription] = useState({ description: null })
    const [date, setDate] = useState({ date: null })

    function submit() {
        data = {
            title: title,
            description: description,
            date: date
        }
        catchData(data)
    }
    console.log(data)
    return (
        <div className="w-full mt-8 text-lg">
            <div className="flex flex-col p-7 font-ptsans mr-80 mt-4">
                <div className="flex justify-end mt-2">
                    <button className="bg-white text-black  py-2 w-20 rounded-md hover:bg-black hover:text-white" onClick={onCancel}>Cancel</button>
                    <button className="bg-white text-black  py-2 w-20 rounded-md hover:bg-black hover:text-white" onClick={submit}>Save</button>
                </div>
                <div className="mt-3">
                    <label className="block font-bold">
                        TITLE
                    </label>
                    <input type="text" className="bg-gray-200 p-2 w-full" onChange={(e) => (setTitle(e.target.value))} />
                </div>
                <div className="mt-3">
                    <label className="block font-bold">
                        DESCRIPTION
                    </label>
                    <textarea name="descrition" className=" bg-gray-200 w-full p-2" onChange={(e) => (setDescription(e.target.value))}></textarea>
                </div>
                <div className="mt-3">
                    <label className="block font-bold">
                        DATE
                    </label>
                    <input type="date" className=" bg-gray-200 w-full p-2" onChange={(e) => (setDate(e.target.value))} />
                </div>
            </div>
        </div>
    )
}