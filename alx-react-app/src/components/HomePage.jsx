import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import recipesData from '../data.json'

function HomePage() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        setRecipes(recipesData)
    }, [])

    return (
        <section className="space-y-8">
            <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Discover</p>
                <h1 className="text-3xl font-semibold md:text-4xl">Fresh recipes worth sharing</h1>
                <p className="max-w-2xl text-slate-600">
                    Browse a curated collection of comfort food classics, modern bowls, and sweet treats.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <Link
                        key={recipe.id}
                        to={`/recipe/${recipe.id}`}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-2 p-5">
                            <h2 className="text-xl font-semibold text-slate-900">{recipe.title}</h2>
                            <p className="text-sm text-slate-600">{recipe.summary}</p>
                            <span className="inline-flex items-center text-sm font-semibold text-slate-900">
                                View recipe
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default HomePage
