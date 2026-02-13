import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
            <Link to="/" className="text-xl font-semibold tracking-tight text-slate-900">
              Recipe Sharing Platform
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link to="/" className="text-slate-700 hover:text-slate-900">
                Home
              </Link>
              <Link
                to="/add"
                className="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
              >
                Add Recipe
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
