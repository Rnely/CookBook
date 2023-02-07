import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeDetails = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const { data: recipe, error, isPending } = useFetch('http://localhost:4000/recipes/' + id);

    const handleClick= () => {
        fetch('http://localhost:4000/recipes/' + recipe.id, {
            method: 'DELETE'
        }).then(() => {
            nav('/');
        })
    }
 
    return ( 
        <div className="recipe-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { recipe && (
                <article>
                    <h2>{ recipe.title }</h2>
                    <p>Takes { recipe.time } minutes to cook</p>
                    <p className="ing">{recipe.listIngredients}</p>
                    <div>{ recipe.method }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;