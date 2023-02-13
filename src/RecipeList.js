import { Link } from "react-router-dom"
import { useAPI } from "./apiContext"
import { useSelector } from "react-redux"


const RecipeList = () => {
    const { recipes } = useAPI()

    const query = useSelector(
        (state) => state.recipeFilter.query
        )

    return (
        <div className="recipe-list">
            {
                recipes.filter(recipes => {
                    if(query === '') {
                        return recipes
                    } else if (recipes.title.toLowerCase().includes(query.toLowerCase())) {
                        return recipes
                    }
                }).map((recipe) => {
                    return (
                        <div className="recipe-preview" key={recipe.id}>
                            <h2>{ recipe.title }</h2>
                            <article>{ recipe.time } minutes to cook</article>
                            <footer>{ recipe.method }</footer>
                            <Link to={`/recipes/${recipe.id}`}>
                                <button>Cook this</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipeList