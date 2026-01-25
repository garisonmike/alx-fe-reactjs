import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const { recipes, favorites, addFavorite, removeFavorite } =
    useRecipeStore();

  return (
    <div>
      <h2>All Recipes</h2>

      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            {isFavorite ? (
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove Favorite
              </button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>
                Add to Favorites
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
