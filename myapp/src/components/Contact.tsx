'use client';

export default function ContactForm() {
  return (
    <section className="bg-[#0a0e1a] text-white py-16 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto bg-[#111827] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 px-6 py-2 rounded text-white hover:bg-indigo-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
