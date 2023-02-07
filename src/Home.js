import RecipeList from "./RecipeList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: recipes, isPending, error} = useFetch('http://localhost:4000/recipes');

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {recipes && <RecipeList recipes={recipes} title="All Recipes"/>}
        </div>
    )
}

export default Home;