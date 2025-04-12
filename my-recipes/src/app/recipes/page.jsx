import Card from '@/components/Card';
import { fetchRecipe } from '@/library/api-call'
import React from 'react'

export default async function RecipesPage() {
    const recipe = await fetchRecipe();

    return (
        <div className='w-full p-4 max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto pt-[65px]'>
            {
                recipe.map((recipe) => {
                    return (
                        <div className='transform transition-transform duration-300 hover:scale-105'>
                            <Card key={recipe.id} name={recipe.name} image={recipe.image} servings={recipe.servings} cookTimeMinutes={recipe.cookTimeMinutes} mealType={recipe.mealType} id={recipe.id} />
                        </div>
                    )
                }
                )
            }

        </div>
    )
}
