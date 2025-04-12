import { fetchRecipeById } from '@/library/api-call';
import Image from 'next/image';



export default async function RecipePage({ params }) {
    const id = params.recipe_id
    const recipe = await fetchRecipeById(id)

    return (
        <div className="min-h-screen bg-gray-100 p-6 pt-[65px]">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                    src={recipe.image}
                    alt={recipe.name}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800">{recipe.name}</h1>
                    <p className="text-gray-600 mt-2">
                        <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Difficulty:</span> {recipe.difficulty}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Prep Time:</span> {recipe.prepTimeMinutes} mins
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Cook Time:</span> {recipe.cookTimeMinutes} mins
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Servings:</span> {recipe.servings}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Calories per Serving:</span> {recipe.caloriesPerServing}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Rating:</span> {recipe.rating} ({recipe.reviewCount} reviews)
                    </p>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-800">Ingredients</h2>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-800">Instructions</h2>
                        <ol className="list-decimal list-inside mt-2 text-gray-600">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-800">Tags</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {recipe.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}