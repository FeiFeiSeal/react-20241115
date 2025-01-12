/*
 * @Author:Pearlie
 * @Date:2025-01-12 16:45:28
 * @LastEditors:Pearlie
 * @LastEditTime:2025-01-12 16:50:57
 * @Description:
 */

export default function Section ({title, id, children}) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

