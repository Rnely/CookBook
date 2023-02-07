import { useState } from "react";


const Create = () => {
    const [ title, setTitle] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ method, setMethod ] = useState('')
    const [ time, setTime ] = useState('')
    const [ listIngredients, setListIngredients ] = useState([])

    const handleIngredients = (e) => {
        e.preventDefault()
        setListIngredients([...listIngredients, ingredients])
        setIngredients('')
        console.log(listIngredients)

    }



    return (
        <div className="create">
            <h2>Add a new recipe</h2>
            <form >
                <label>Recipe title:</label>
                <input 
                    className="inp"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Recipe ingredients:</label>
                <input 
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <button type="button" onClick={handleIngredients}>Add</button>
                <p>Current ingredients: { listIngredients.toString() }</p>
                <label>Recipe method:</label>
                <textarea 
                    className="inp"
                    required
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                />
                <label>Cooking time (in minutes):</label>
                <input 
                    className="inp"
                    type="number"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Create;