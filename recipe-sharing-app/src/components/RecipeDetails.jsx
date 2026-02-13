import { useRecipeStore } from '../recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  
  // Use a selector to get the specific recipe from the store
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      {/* Render Edit Form and Delete Button */}
      <div style={{ marginTop: '20px' }}>
        <EditRecipeForm recipe={recipe} />
        <br />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetail;
