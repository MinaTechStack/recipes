import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import { fetchRecipe } from '@/library/api-call';
import RecipeSlider from '@/components/RecipeSlider';
import Link from 'next/link';

export default async function Homepage() {
  const recipes = await fetchRecipe();
  console.log(recipes)
  const featureRecipes = recipes.slice(0, 4);
  const mostLikedRecipes = recipes.slice(20, 24);
  const topRatingRecipes = recipes.slice(8, 12);

  return (
    <div className='w-full relative pt-[64px]'>
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[520px]">
        <Image
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1733860531621-34d137d72c5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={1000}
          priority
          height={500}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link href="/">
            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl font-bold">Home</h1>
          </Link>
        </div>
      </section>

      <div className='pt-65px'>
        <RecipeSlider />
      </div>

      <div className='container mx-auto max-w-[1240px]'>
        {/* Sweet Treat Section */}
        <section className="w-full py-12 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1733860531621-34d137d72c5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mac and Cheese"
                width={600}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center min-h-[400px]">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Sweet Treat</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Layered Pancake Delight</h2>
              <p className="text-gray-700 mb-2">
                A heavenly stack of fluffy pancakes, generously topped with ripe strawberries and banana slices, then drizzled with rich chocolate syrup.
              </p>
              <p className="text-gray-700">
                Perfect for a comforting breakfast or a sweet dessert that looks as good as it tastes. Simple, satisfying, and made with love.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Recipes */}
        <section>
          <h2 className='text-3xl font-bold my-5 text-teal-900'>What We're Craving</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3'>
            {featureRecipes.map((recipe) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
                <div className='transform transition-transform duration-300 hover:scale-105'>
                  {/* Explicitly passing props */}
                  <Card
                    name={recipe.name}
                    image={recipe.image}
                    servings={recipe.servings}
                    cookTimeMinutes={recipe.cookTimeMinutes}
                    mealType={recipe.mealType}
                    id={recipe.id} // Passing the id prop explicitly
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Most Liked Recipes */}
        <section>
          <h2 className='text-3xl font-bold my-5 text-teal-900'>Fan Favorites</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3'>
            {mostLikedRecipes.map((recipe) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className='transform transition-transform duration-300 hover:scale-105'>
                {/* Explicitly passing props */}
                <Card
                  name={recipe.name}
                  image={recipe.image}
                  servings={recipe.servings}
                  cookTimeMinutes={recipe.cookTimeMinutes}
                  mealType={recipe.mealType}
                  id={recipe.id} // Passing the id prop explicitly
                />
              </div>
            </Link>
            ))}
          </div>
        </section>

        {/* Top Rating Recipes */}
        <section>
          <h2 className='text-3xl font-bold my-5 text-teal-900'>Don't Miss</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3'>
            {topRatingRecipes.map((recipe) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className='transform transition-transform duration-300 hover:scale-105'>
                {/* Explicitly passing props */}
                <Card
                  name={recipe.name}
                  image={recipe.image}
                  servings={recipe.servings}
                  cookTimeMinutes={recipe.cookTimeMinutes}
                  mealType={recipe.mealType}
                  id={recipe.id} // Passing the id prop explicitly
                />
              </div>
            </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
