import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
