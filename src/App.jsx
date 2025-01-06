
import { useState } from 'react'
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import CoreConcept from './components/CoreConcept'
import Header from './components/Header'
import TabButton from './components/TabButton'



function App() {
  const [tabContent, setTabContent] = useState()
  const handleClick = (v) => {
    setTabContent(v)
    console.log(tabContent);
    
  }
  // console.log('app');
  console.log(EXAMPLES); 
  
  return (
    <div>
      <Header />
      <main>
      <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
          { CORE_CONCEPTS.map((item) =>(
            <CoreConcept key={item.title0} {...item} />
          )) }
        </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={tabContent === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={tabContent === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={tabContent === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={tabContent === 'state'} onClick={() => handleClick('state')}>State</TabButton>
        </menu>
        <div id="tab-content">
          {!tabContent? <p>Please select a topic</p> : (
          <><h3>{EXAMPLES[tabContent].title}</h3><p>{EXAMPLES[tabContent].description}</p><pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre></>
        )}
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;
