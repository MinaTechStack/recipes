import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, image, servings, cookTimeMinutes, mealType, id }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image className="w-full h-48 object-cover" src={image} alt="" width={100} height={100} />
            <div className="px-6 py-4">
                <Link href={`/recipes/${id}`}><h2 className="font-bold text-xl mb-2 text-gray-800">{name}</h2></Link>
                <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Servings:</span>{servings}
                </p>
                <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Cook Time:</span>{cookTimeMinutes}
                </p>
                <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Meal Type:</span>{mealType}
                </p>
            </div>
        </div>
    );
};

export default Card;