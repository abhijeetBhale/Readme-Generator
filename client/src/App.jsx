import React, { useState } from 'react';
import 'devicon/devicon.min.css'; // Ensure you installed devicon (via npm/yarn or linked in index.html)

const SKILLS = {
  ProgrammingLanguages: [
    { name: 'C', iconClass: 'devicon-c-plain colored' },
    { name: 'C++', iconClass: 'devicon-cplusplus-plain colored' },
    { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
    { name: 'Go', iconClass: 'devicon-go-plain colored' },
    { name: 'Java', iconClass: 'devicon-java-plain colored' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
    { name: 'PHP', iconClass: 'devicon-php-plain colored' },
    { name: 'Perl', iconClass: 'devicon-perl-plain colored' },
    { name: 'Ruby', iconClass: 'devicon-ruby-plain colored' },
    { name: 'Scala', iconClass: 'devicon-scala-plain colored' },
    { name: 'Python', iconClass: 'devicon-python-plain colored' },
    { name: 'Swift', iconClass: 'devicon-swift-plain colored' },
    { name: 'Objective-C', iconClass: 'devicon-objectivec-plain colored' },
    { name: 'Clojure', iconClass: 'devicon-clojure-plain colored' },
    { name: 'Rust', iconClass: 'devicon-rust-plain colored' },
    { name: 'Haskell', iconClass: 'devicon-haskell-plain colored' },
    { name: 'CoffeeScript', iconClass: 'devicon-coffeescript-plain colored' },
    { name: 'Elixir', iconClass: 'devicon-elixir-plain colored' },
    { name: 'Erlang', iconClass: 'devicon-erlang-plain colored' },
    { name: 'Nim', iconClass: 'devicon-nim-plain colored' },
  ],
  FrontendDevelopment: [
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
    { name: 'React', iconClass: 'devicon-react-original colored' },
    { name: 'Svelte', iconClass: 'devicon-svelte-plain colored' },
    { name: 'AngularJS', iconClass: 'devicon-angularjs-plain colored' },
    { name: 'Angular', iconClass: 'devicon-angular-plain colored' },
    { name: 'Backbone.js', iconClass: 'devicon-backbonejs-plain colored' },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
    { name: 'Vuetify', iconClass: 'devicon-vuetify-plain colored' },
    { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
    { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
    { name: 'Pug', iconClass: 'devicon-pug-plain colored' },
    { name: 'Gulp', iconClass: 'devicon-gulp-plain colored' },
    { name: 'Sass', iconClass: 'devicon-sass-plain colored' },
    { name: 'Redux', iconClass: 'devicon-redux-original colored' },
    { name: 'Webpack', iconClass: 'devicon-webpack-plain colored' },
    { name: 'Babel', iconClass: 'devicon-babel-plain colored' },
    { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain colored' },
    { name: 'Materialize', iconClass: 'devicon-materialize-plain colored' },
    { name: 'Bulma', iconClass: 'devicon-bulma-plain colored' },
    { name: 'GTK', iconClass: 'devicon-gtk-plain colored' },
    { name: 'Qt', iconClass: 'devicon-qt-plain colored' },
    { name: 'wxWidgets', iconClass: 'devicon-wxwidgets-plain colored' },
    { name: 'Ember.js', iconClass: 'devicon-ember-plain colored' },
  ],
  BackendDevelopment: [
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
    { name: 'Spring', iconClass: 'devicon-spring-plain colored' },
    { name: 'Express.js', iconClass: 'devicon-express-original' },
    { name: 'GraphQL', iconClass: 'devicon-graphql-plain colored' },
    { name: 'Kafka', iconClass: 'devicon-kafka-plain colored' },
    { name: 'Solr', iconClass: 'devicon-solr-plain colored' },
    { name: 'RabbitMQ', iconClass: 'devicon-rabbitmq-plain colored' },
    { name: 'Hadoop', iconClass: 'devicon-hadoop-plain colored' },
    { name: 'Nginx', iconClass: 'devicon-nginx-plain colored' },
    { name: 'OpenResty', iconClass: 'devicon-openresty-plain colored' },
    { name: 'NestJS', iconClass: 'devicon-nestjs-plain colored' },
  ],
  MobileAppDevelopment: [
    { name: 'Android', iconClass: 'devicon-android-plain colored' },
    { name: 'Flutter', iconClass: 'devicon-flutter-plain colored' },
    { name: 'Dart', iconClass: 'devicon-dart-plain colored' },
    { name: 'Kotlin', iconClass: 'devicon-kotlin-plain colored' },
    { name: 'NativeScript', iconClass: 'devicon-nativescript-plain colored' },
    { name: 'Xamarin', iconClass: 'devicon-xamarin-plain colored' },
    { name: 'React Native', iconClass: 'devicon-react-native-plain colored' },
    { name: 'Ionic', iconClass: 'devicon-ionic-plain colored' },
    { name: 'Apache Cordova', iconClass: 'devicon-cordova-plain colored' },
  ],
  AI_ML: [
    { name: 'TensorFlow', iconClass: 'devicon-tensorflow-original colored' },
    { name: 'PyTorch', iconClass: 'devicon-pytorch-plain colored' },
    { name: 'Pandas', iconClass: 'devicon-pandas-original colored' },
    { name: 'Seaborn', iconClass: 'devicon-seaborn-original colored' },
    { name: 'OpenCV', iconClass: 'devicon-opencv-plain colored' },
    { name: 'Scikit-Learn', iconClass: 'devicon-scikit-learn-plain colored' },
  ],
  Database: [
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
    { name: 'Redis', iconClass: 'devicon-redis-plain colored' },
    { name: 'Oracle', iconClass: 'devicon-oracle-plain colored' },
    { name: 'Cassandra', iconClass: 'devicon-cassandra-plain colored' },
    { name: 'CouchDB', iconClass: 'devicon-couchdb-plain colored' },
    { name: 'Hive', iconClass: 'devicon-hive-plain colored' },
    { name: 'Realm', iconClass: 'devicon-realm-plain colored' },
    { name: 'MariaDB', iconClass: 'devicon-mariadb-plain colored' },
    { name: 'CockroachDB', iconClass: 'devicon-cockroachdb-plain colored' },
    { name: 'Elasticsearch', iconClass: 'devicon-elasticsearch-plain colored' },
    { name: 'SQLite', iconClass: 'devicon-sqlite-plain colored' },
    { name: 'MSSQL', iconClass: 'devicon-mssql-plain colored' },
  ],
  DataVisualization: [
    { name: 'D3.js', iconClass: 'devicon-d3js-plain colored' },
    { name: 'Chart.js', iconClass: 'devicon-chartjs-plain colored' },
    { name: 'CanvasJS', iconClass: 'devicon-canvasjs-plain colored' },
    { name: 'Kibana', iconClass: 'devicon-kibana-plain colored' },
    { name: 'Grafana', iconClass: 'devicon-grafana-plain colored' },
  ],
  DevOps: [
    { name: 'AWS', iconClass: 'devicon-amazonwebservices-original colored' },
    { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
    { name: 'Jenkins', iconClass: 'devicon-jenkins-plain colored' },
    { name: 'GCP', iconClass: 'devicon-googlecloud-plain colored' },
    { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain colored' },
    { name: 'Bash', iconClass: 'devicon-bash-plain colored' },
    { name: 'Azure', iconClass: 'devicon-azure-plain colored' },
    { name: 'Vagrant', iconClass: 'devicon-vagrant-plain colored' },
    { name: 'CircleCI', iconClass: 'devicon-circleci-plain colored' },
    { name: 'Travis CI', iconClass: 'devicon-travisci-plain colored' },
  ],
  BackendAsAService: [
    { name: 'Firebase', iconClass: 'devicon-firebase-plain colored' },
    { name: 'Appwrite', iconClass: 'devicon-appwrite-plain colored' },
    { name: 'Amplify', iconClass: 'devicon-amplify-plain colored' },
    { name: 'Heroku', iconClass: 'devicon-heroku-plain colored' },
  ],
  Framework: [
    { name: 'Django', iconClass: 'devicon-django-plain colored' },
    { name: 'Dotnet', iconClass: 'devicon-dotnet-plain colored' },
    { name: 'Electron', iconClass: 'devicon-electron-plain colored' },
    { name: 'Symfony', iconClass: 'devicon-symfony-plain colored' },
    { name: 'Laravel', iconClass: 'devicon-laravel-plain colored' },
    { name: 'CodeIgniter', iconClass: 'devicon-codeigniter-plain colored' },
    { name: 'Rails', iconClass: 'devicon-rails-plain colored' },
    { name: 'Flask', iconClass: 'devicon-flask-plain colored' },
    { name: 'Quasar', iconClass: 'devicon-quasar-plain colored' },
  ],
  Testing: [
    { name: 'Cypress', iconClass: 'devicon-cypress-plain colored' },
    { name: 'Selenium', iconClass: 'devicon-selenium-plain colored' },
    { name: 'Jest', iconClass: 'devicon-jest-plain colored' },
    { name: 'Mocha', iconClass: 'devicon-mocha-plain colored' },
    { name: 'Puppeteer', iconClass: 'devicon-puppeteer-plain colored' },
    { name: 'Karma', iconClass: 'devicon-karma-plain colored' },
    { name: 'Jasmine', iconClass: 'devicon-jasmine-plain colored' },
  ],
  Software: [
    { name: 'Illustrator', iconClass: 'devicon-illustrator-plain colored'},
{ name: 'Photoshop', iconClass: 'devicon-photoshop-plain colored' },
{ name: 'Figma', iconClass: 'devicon-figma-plain colored' },
{ name: 'Sketch', iconClass: 'devicon-sketch-plain colored' },
{ name: 'After Effects', iconClass: 'devicon-aftereffects-plain colored' },
],
};

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

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleSkill = (skillName) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skillName)
        ? prevSkills.filter((skill) => skill !== skillName)
        : [...prevSkills, skillName]
    );
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

### 🛠️ Skills

${selectedSkills.map((skill) => `- ${skill}`).join('\n')}

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
    link.download = `${userData.name || 'README'}.md`;
    link.click();
  };

  return (
    <div className="App">
      <header className="text-center p-4 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold">GitHub README Generator</h1>
        <p className="mt-2">Generate a custom README file for your GitHub profile.</p>
      </header>

      <main className="p-6 space-y-6">
        {/* Work Section */}
        <div className="section" id="work">
          <h2 className="text-xl font-bold mb-2">Work</h2>
          {['project1', 'project1Link', 'project2', 'project2Link', 'helpWith', 'helpWithLink'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              value={userData[field]}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md mb-2"
            />
          ))}
        </div>

        {/* Learning & Interests */}
        <div className="section" id="learning">
          <h2 className="text-xl font-bold mb-2">Learning & Interests</h2>
          {['learning', 'askAbout'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              value={userData[field]}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md mb-2"
            />
          ))}
        </div>

        {/* Skills */}
        <div className="section" id="skills">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => toggleSkill(skill.name)}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-md transition ${
                      selectedSkills.includes(skill.name)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800'
                    }`}
                  >
                    <i className={`${skill.iconClass} text-xl`}></i>
                    <span>{skill.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="section" id="contact">
          <h2 className="text-xl font-bold mb-2">Contact & Links</h2>
          {['email', 'portfolioLink', 'blogLink', 'resumeLink', 'funFact'].map((field) => (
            <input
              key={field}
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              value={userData[field]}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md mb-2"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
            onClick={copyToClipboard}
          >
            Copy to Clipboard
          </button>
          <button
            className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
            onClick={downloadReadme}
          >
            Download README
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
