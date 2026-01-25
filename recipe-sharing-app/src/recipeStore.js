import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Your existing recipes state
  searchTerm: '',
  filteredRecipes: [],

  // Action to add a recipe (updated to filter immediately)
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to set the full list of recipes (e.g., from an API)
  setRecipes: (recipes) => set({ 
    recipes,
    filteredRecipes: recipes // Initialize filtered list with all recipes
  }),

  // Action to delete a recipe
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id),
  })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ).filter(recipe => // Re-filter to ensure it still matches search
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Search actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export { useRecipeStore };
