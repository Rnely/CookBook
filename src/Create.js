import { useState } from "react";


const Create = () => {
    const [ title, setTitle] = useState('')
    const [ ingredients, setIngredients ] = useState([])
    const [ method, setMethod ] = useState('')
    const [ time, setTime ] = useState('')



    return (
        <div className="create">
            <h2>Add a new recepie</h2>
            <form >
                <label>Recepie title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Recepie ingredients:</label>
                <input 
                    type="text"
                    required
                    value={ingredients}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button>Add</button>
                <label>Recepie method:</label>
                <textarea 
                    required
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                />
                <label>Cooking time (in minutes):</label>
                <input 
                    type="number"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create;