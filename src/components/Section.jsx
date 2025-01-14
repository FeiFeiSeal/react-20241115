/*
 * @Author:Pearlie
 * @Date:2025-01-12 16:45:28
 * @LastEditors:Pearlie
 * @LastEditTime:2025-01-15 00:03:23
 * @Description:
 */

export default function Section ({title, children, ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

