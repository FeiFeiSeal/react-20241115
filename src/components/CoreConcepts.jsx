/*
 * @Author:Pearlie
 * @Date:2025-01-12 15:49:30
 * @LastEditors:Pearlie
 * @LastEditTime:2025-01-12 16:56:08
 * @Description:
 */
import CoreConcept from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js'
import Section from './Section.jsx'

export default function CoreConcepts () {
  return (
    <Section id='core-concepts' title="Time to get started!">
      <ul>
        { CORE_CONCEPTS.map((item) =>(
          <CoreConcept key={item.title0} {...item} />
        )) }
      </ul>
    </Section>
  )
}