export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Ashim Shrestha</h1>
        <p className="text-xl text-gray-600">Computer Engineering Student</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I’m a passionate computer engineering student with a keen interest in web development, algorithms, and innovative technology.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Portfolio Website using Next.js</li>
          <li>Chat App with Socket.IO (MERN Stack)</li>
          <li>QR Payment UI (Design Challenge)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:ashimsth89@gmail.com" className="text-blue-600 underline">ashimsth89@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/shresthashim" target="_blank" className="text-blue-600 underline">ashimshrestha</a></p>
      </section>
    </main>
  );
}
