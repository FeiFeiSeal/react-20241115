/*
 * @Author:Wendy
 * @Date:2024-11-01 00:02:48
 * @LastEditors:Pearlie
 * @LastEditTime:2025-01-15 00:05:06
 * @Description:
 */
export default function TabButton({children, isSelected, ...props}) {
  console.log('TabButton');
  
  
  return (
    <li>
      <button className={isSelected ? 'active': ''} {...props}>{children}</button>
    </li>
  )
}