import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-white text-gray-800">

      <div className="relative h-[60vh] overflow-hidden mt-15">
        <Image
          src="https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Food background"
          priority
          fill
          className="object-cover blur-[1px]"
        />
        <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
          <Link href="/about"> <h1 className="text-white text-4xl font-bold">About Us</h1></Link>
        </div>
      </div>

      <section className="max-w-[1240px] mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-4 text-teal-800">Who We Are</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Welcome to <span className="font-semibold">My Recipes</span> — your go-to destination for delicious and simple cooking ideas.
          Whether you’re a kitchen expert or just starting out, we provide easy-to-follow recipes for everyone.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Our goal is to make home cooking enjoyable and approachable. With handpicked recipes, clear instructions, and visual inspiration,
          we help bring your meals to life.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-teal-700">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Fresh and family-friendly recipes</li>
          <li>Clear instructions for every level</li>
          <li>Meal ideas for all occasions</li>
        </ul>
      </section>
    </div>
  );
}
