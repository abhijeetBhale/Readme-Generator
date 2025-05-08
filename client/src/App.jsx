import React, { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    bio: '',
    project1: '',
    project1Link: '',
    project2: '',
    project2Link: '',
    helpWith: '',
    helpWithLink: '',
    learning: '',
    askAbout: '',
    email: '',
    portfolioLink: '',
    blogLink: '',
    resumeLink: '',
    funFact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateReadme = () => {
    return `# Hi 👋, I'm ${userData.name}

## A passionate Full Stack Developer

### Work

🚀 **I’m currently working on**  
[${userData.project1}](${userData.project1Link})

🤝 **I’m looking to collaborate on**  
[${userData.project2}](${userData.project2Link})

💡 **I’m looking for help with**  
[${userData.helpWith}](${userData.helpWithLink})

🌱 **I’m currently learning**  
${userData.learning}

💬 **Ask me about**  
${userData.askAbout}

📫 **How to reach me**  
[${userData.email}](mailto:${userData.email})

---

### Other Links

🖥️ **All of my projects are available at**  
[Portfolio](${userData.portfolioLink})

📝 **I regularly write articles on**  
[Blog](${userData.blogLink})

📄 **Know about my experiences**  
[Resume](${userData.resumeLink})

⚡ **Fun fact**  
${userData.funFact}
    `;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateReadme())
      .then(() => alert('Copied to Clipboard!'))
      .catch((err) => alert('Failed to copy: ', err));
  };

  const downloadReadme = () => {
    const blob = new Blob([generateReadme()], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${userData.name}-README.md`;
    link.click();
  };

  return (
    <div className="App">
      <header className="text-center p-4 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold">GitHub README Generator</h1>
        <p className="mt-2">Generate a custom README file for your GitHub profile.</p>
      </header>

      <main className="p-6">
        <div className="space-y-4">
          {/* Work Section */}
          <div className="section">
            <h2 className="text-xl font-bold mb-2">Work</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">🚀 I’m currently working on</p>
                <input
                  type="text"
                  name="project1"
                  placeholder="Project 1 Name"
                  value={userData.project1}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="project1Link"
                  placeholder="Project 1 Link"
                  value={userData.project1Link}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">🤝 I’m looking to collaborate on</p>
                <input
                  type="text"
                  name="project2"
                  placeholder="Project 2 Name"
                  value={userData.project2}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="project2Link"
                  placeholder="Project 2 Link"
                  value={userData.project2Link}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Learning & Skills Section */}
          <div className="section">
            <h2 className="text-xl font-bold mb-2">Learning & Skills</h2>
            <input
              type="text"
              name="learning"
              placeholder="Currently Learning"
              value={userData.learning}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="askAbout"
              placeholder="Ask Me About"
              value={userData.askAbout}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Contact Section */}
          <div className="section">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={userData.email}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="portfolioLink"
              placeholder="Portfolio Link"
              value={userData.portfolioLink}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="blogLink"
              placeholder="Blog Link"
              value={userData.blogLink}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="resumeLink"
              placeholder="Resume Link"
              value={userData.resumeLink}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="funFact"
              placeholder="Fun Fact"
              value={userData.funFact}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mt-4 flex space-x-4">
            <button
              type="button"
              className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
              onClick={copyToClipboard}
            >
              Copy to Clipboard
            </button>
            <button
              type="button"
              className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
              onClick={downloadReadme}
            >
              Download README
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
