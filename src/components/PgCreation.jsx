import { useState, useRef } from "react"

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
    const [unfilledStyle, setUnfilledStyle] = useState(false)

    function submit() {
        try {
            if (title.title !== null && description.description !== null && date.date !== null) {
                data = {
                    title: title,
                    description: description,
                    date: date
                }
                catchData(data)

            }
            else {
                // alert('Please fill in the required fields!')
                setUnfilledStyle(true)
                throw 'credentials not fulfilled'

            }
        }
        catch (err) {
            alert('Error: ' + err)
            return;
        }
    }

    // console.log(data)
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
                    <input type="text" className={` p-2 w-full ${unfilledStyle && title.title === null ? 'bg-red-200' : 'bg-gray-200'}`} onChange={(e) => (setTitle(e.target.value))} />
                </div>
                <div className="mt-3">
                    <label className="block font-bold">
                        DESCRIPTION
                    </label>
                    <textarea className={`w-full p-2 ${unfilledStyle && description.description === null ? 'bg-red-200' : 'bg-gray-200'}`} onChange={(e) => (setDescription(e.target.value))}></textarea>
                </div>
                <div className="mt-3">
                    <label className="block font-bold">
                        DATE
                    </label>
                    <input type="date" className={`w-full p-2 ${unfilledStyle && date.date === null ? 'bg-red-200' : 'bg-gray-200'}`} onChange={(e) => (setDate(e.target.value))} />
                </div>
            </div>
        </div>
    )
}