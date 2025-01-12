/*
 * @Author:Wendy
 * @Date:2025-01-12 15:49:30
 * @LastEditors:Wendy
 * @LastEditTime:2025-01-12 15:54:20
 * @Description:
 */
import CoreConcept from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts () {
  return (
    <section id='core-concepts'>
      <h2>Time to get started!</h2>
      <ul>
        { CORE_CONCEPTS.map((item) =>(
          <CoreConcept key={item.title0} {...item} />
        )) }
      </ul>
    </section>
  )
}