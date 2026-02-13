import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();

  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>

      {favoriteRecipes.length === 0 && <p>No favorites yet.</p>}

      {favoriteRecipes.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default FavoritesList;
