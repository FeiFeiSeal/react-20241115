/*
 * @Author:Wendy
 * @Date:2023-09-14 14:28:26
 * @LastEditors:Pearlie
 * @LastEditTime:2025-01-16 23:55:50
 * @Description:
 */
import CoreConcepts from './components/CoreConcepts.jsx'
import Header from './components/Header'
import Examples from './components/Examples.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
