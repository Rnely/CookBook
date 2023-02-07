

const RecipeList = ({ recipes }) => {

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe-preview" key={recipe.id}>
                    <h2>{ recipe.title }</h2>
                    <article>{ recipe.time } minutes to cook</article>
                    <footer>{ recipe.method }</footer>
                    <button>Cook this</button>
                </div>
            ))}
        </div>
    )
}

export default RecipeList