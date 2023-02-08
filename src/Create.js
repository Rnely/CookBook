import { useState } from "react";
import { useNavigate } from "react-router";
import { useAPI } from "./apiContext";


const Create = () => {
    const [ title, setTitle] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ method, setMethod ] = useState('')
    const [ time, setTime ] = useState('')
    const [ listIngredients, setListIngredients ] = useState([])
    const { isPending, setIsPending } =  useAPI();

    const nav = useNavigate()

    const handleIngredients = (e) => {
        e.preventDefault()
        setListIngredients([...listIngredients, ingredients])
        setIngredients('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const recipe = {title, listIngredients, method, time}

        setIsPending(true);

        fetch(' http://localhost:4000/recipes', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log("New recipe added")
            setIsPending(false);
            nav('/')
        })
    }



    return (
        <div className="create">
            <h2>Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
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
                { !isPending && <button type="submit">Submit</button>}
                { isPending && <button disabled>Submiting...</button>}
            </form>
        </div>
    )
}

export default Create;