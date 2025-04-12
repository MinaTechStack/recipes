import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-teal-700">Contact Us</h1>

      <p className="text-lg text-center mb-10">
        Feel free to reach out to us at our location:
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Our Location</h3>
            <p>123 Dummy Street</p>
            <p>Cityville, Countryland</p>
            <p>📞 Phone: (123) 456-7890</p>
            <p>✉️ Email: contact@dummyemail.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Business Hours</h3>
            <p>🕘 Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>🕥 Saturday: 10:00 AM - 3:00 PM</p>
            <p>🚫 Sunday: Closed</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Find Us on the Map</h3>
          <div className="rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468132!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0f9b1b7%3A0x4c8b8b9b0b9b0b9b!2s123%20Dummy%20Street%2C%20Cityville%2C%20Countryland!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              className="w-full h-[350px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
