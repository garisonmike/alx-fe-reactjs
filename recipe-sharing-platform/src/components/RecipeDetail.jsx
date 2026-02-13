import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import recipesData from '../data.json'

function RecipeDetail() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const numericId = Number(id)
        const selectedRecipe = recipesData.find((item) => item.id === numericId)
        setRecipe(selectedRecipe || null)
    }, [id])

    if (!recipe) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <h1 className="text-2xl font-semibold">Recipe not found</h1>
                <p className="mt-2 text-slate-600">Try picking another recipe from the home page.</p>
                <Link
                    to="/"
                    className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white"
                >
                    Back to recipes
                </Link>
            </div>
        )
    }

    return (
        <section className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <img src={recipe.image} alt={recipe.title} className="h-72 w-full object-cover" />
                    <div className="space-y-4 p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Recipe detail</p>
                        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{recipe.title}</h1>
                        <p className="text-slate-600">{recipe.summary}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-slate-900">Ingredients</h2>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                            {recipe.ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-slate-900">Cooking Instructions</h2>
                        <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-600">
                            {recipe.steps.map((step, index) => (
                                <li key={index} className="instructions">{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            <Link
                to="/"
                className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
                Back to all recipes
            </Link>
        </section>
    )
}

export default RecipeDetail
