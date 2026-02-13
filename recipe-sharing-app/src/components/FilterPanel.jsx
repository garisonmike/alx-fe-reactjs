import { useRecipeStore } from '../store/recipeStore';

const FilterPanel = () => {
  const filterIngredients = useRecipeStore(
    (state) => state.filterIngredients
  );
  const setFilterIngredients = useRecipeStore(
    (state) => state.setFilterIngredients
  );

  const maxTime = useRecipeStore((state) => state.maxTime);
  const setMaxTime = useRecipeStore((state) => state.setMaxTime);

  return (
    <div>
      <input
        type="text"
        value={filterIngredients}
        placeholder="Filter by ingredients..."
        onChange={(e) => setFilterIngredients(e.target.value)}
      />

      <input
        type="number"
        value={maxTime}
        placeholder="Max time (minutes)"
        onChange={(e) => setMaxTime(Number(e.target.value))}
      />
    </div>
  );
};

export default FilterPanel;
