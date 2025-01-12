/*
 * @Author:Pearlie
 * @Date:2025-01-12 16:11:14
 * @LastEditors:Pearlie
 * @LastEditTime:2025-01-12 16:52:43
 * @Description:
 */

import { useState } from 'react'
import { EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'

export default function Examples () {
  const [tabContent, setTabContent] = useState()
  const handleClick = (v) => {
    setTabContent(v)
  }
  return (
    <Section title='examples' id="examples" >
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
    </Section>
  )
}