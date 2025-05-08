import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">GitHub README Generator</h1>
        <p className="text-lg text-gray-600">Build your GitHub profile README with ease</p>
      </header>

      <main className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">👤 Profile Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="GitHub Username"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Bio or Tagline"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Skills (comma separated)"
              className="col-span-1 md:col-span-2 border border-gray-300 p-2 rounded"
            />
            <textarea
              placeholder="About Me / Description"
              className="col-span-1 md:col-span-2 border border-gray-300 p-2 rounded"
              rows={4}
            />
          </form>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">📄 Live Preview</h2>
          <div className="border border-gray-300 p-4 bg-gray-50 rounded text-sm font-mono whitespace-pre-wrap">
            <p>👤 GitHub Username: [username]</p>
            <p>📝 Bio: [bio]</p>
            <p>🛠 Skills: [skills]</p>
            <p>📘 About Me:</p>
            <p>[about me]</p>
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Copy Markdown
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Download .md
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
