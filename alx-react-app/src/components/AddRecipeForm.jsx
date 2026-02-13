import { useState } from 'react'

const initialFormState = {
    title: '',
    ingredients: '',
    steps: '',
}

function AddRecipeForm() {
    const [formData, setFormData] = useState(initialFormState)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const validateForm = () => {
        const nextErrors = {}

        if (!formData.title.trim()) {
            nextErrors.title = 'Please add a recipe title.'
        }

        if (!formData.ingredients.trim()) {
            nextErrors.ingredients = 'Please add ingredients (at least two).'
        } else {
            const parts = formData.ingredients
                .split(/\n|,/)
                .map((item) => item.trim())
                .filter(Boolean)
            if (parts.length < 2) {
                nextErrors.ingredients = 'Add at least two ingredients.'
            }
        }

        if (!formData.steps.trim()) {
            nextErrors.steps = 'Please add preparation steps.'
        }

        return nextErrors
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const nextErrors = validateForm()
        setErrors(nextErrors)

        if (Object.keys(nextErrors).length === 0) {
            setSubmitted(true)
            setFormData(initialFormState)
        }
    }

    return (
        <section className="space-y-8">
            <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Share</p>
                <h1 className="text-3xl font-semibold md:text-4xl">Add a new recipe</h1>
                <p className="max-w-2xl text-slate-600">
                    Submit your favorite dish and inspire the community.
                </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                {submitted && (
                    <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                        Recipe submitted successfully. Save your notes and keep cooking.
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700" htmlFor="title">
                            Recipe title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
                            placeholder="Ex: Citrus roasted salmon"
                        />
                        {errors.title && <p className="text-sm text-rose-600">{errors.title}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700" htmlFor="ingredients">
                            Ingredients
                        </label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            rows="5"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
                            placeholder="List each ingredient on a new line"
                        />
                        {errors.ingredients && (
                            <p className="text-sm text-rose-600">{errors.ingredients}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700" htmlFor="steps">
                            Preparation steps
                        </label>
                        <textarea
                            id="steps"
                            name="steps"
                            value={formData.steps}
                            onChange={handleChange}
                            rows="6"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
                            placeholder="Describe the steps in order"
                        />
                        {errors.steps && <p className="text-sm text-rose-600">{errors.steps}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 md:w-auto"
                    >
                        Submit recipe
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AddRecipeForm
