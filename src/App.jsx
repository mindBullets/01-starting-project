import reactImage from "./assets/react-core-concepts.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src="..." alt="..."/>
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concept">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept/>
            <CoreConcept/>
            <CoreConcept/>
            <CoreConcept/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
