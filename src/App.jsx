import { useState } from 'react'
import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from './components/CoreConcept'
import Header from './components/Header'
import TabButton from './components/TabButton'



function App() {
  const [tabContent, setTabContent] = useState('components')
  const handleClick = (v) => {
    setTabContent(v)
    console.log(tabContent);
    
  }
  console.log('app');
  
  return (
    <div>
      <Header />
      <main>
      <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton onClick={() => handleClick('state')}>State</TabButton>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;
