import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-10">
            <div className="container max-w-[1240px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer">About Us</h3>
                        <p className="text-sm leading-relaxed">
                            We provide the best recipes for your favorite dishes. Explore, cook, and enjoy delicious meals with us.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li><Link href="#" className="hover:underline">Home</Link></li>
                            <li><Link href="#" className="hover:underline">Recipes</Link></li>
                            <li><Link href="#" className="hover:underline">About</Link></li>
                            <li><Link href="#" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer">Contact Us</h3>
                        <p className="text-sm mb-2">Email: support@myrecipes.com</p>
                        <p className="text-sm mb-2">Phone: +91 98765 43210                        </p>
                        <p className="text-sm">Address: 123 Recipe St, Jaipur, India</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer">Send a Message</h3>
                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-sm">&copy; 2025 My Recipes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
