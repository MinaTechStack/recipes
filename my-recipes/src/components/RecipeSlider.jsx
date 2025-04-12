"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "@/components/Card";
import { fetchRecipe } from "@/library/api-call";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeSlider = () => {
    const [recipes, setRecipes] = useState([]);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const loadRecipes = async () => {
            const data = await fetchRecipe();
            setRecipes(data);
            setTimeout(() => setAnimate(true), 200);
        };
        loadRecipes();
    }, []);

    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold my-5 text-teal-900">
                Popular Recipes
            </h2>

            <Slider {...settings}>
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="p-2">
                        <div className={`transform relative transition-all duration-700 ${animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
                            }`}
                        >
                            <Card
                                name={recipe.name}
                                image={recipe.image}
                                servings={recipe.servings}
                                cookTimeMinutes={recipe.cookTimeMinutes}
                                mealType={recipe.mealType}
                                id={recipe.id}
                            />
                            <div className="absolute bottom-4 right-4">
                                <Link
                                    href={`/recipes/${recipe.id}`}
                                    className="text-teal-600 hover:underline text-sm font-medium"
                                > 
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RecipeSlider;
