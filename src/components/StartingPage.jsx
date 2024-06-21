export default function StartingPage({ onCreate }) {
    return (
        <div className="w-screen flex justify-center items-center">
            <div className="flex flex-col items-center">
                <img className="w-20 h-20" src="logo.png" alt="no-project img" />
                <h2 className="text-2xl text-gray-900  font-ptsans font-bold py-3">No Project Selected</h2>
                <p className="font-ptsans">Select a project or get started with a new one</p>
                <button className="px-3 py-2 mt-5 bg-gray-200 text-black hover:bg-black hover:text-white font-ptsans rounded-lg" onClick={onCreate}>Create new project</button>
            </div>
        </div>
    )
}  