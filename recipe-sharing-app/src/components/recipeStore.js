import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to add a recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to set the full list of recipes
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // REQUIRED ACTION: Delete a recipe
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id),
  })),

  // REQUIRED ACTION: Update a recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export { useRecipeStore };
