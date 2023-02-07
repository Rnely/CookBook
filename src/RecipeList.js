

const RecipeList = ({ recipes }) => {

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe-preview">
                    <h2>{ recipe.title }</h2>
                    <article>{ recipe.time } minutes to cook</article>
                    <footer>{ recipe.method }</footer>
                </div>
            ))}
        </div>
    )
}

export default RecipeList