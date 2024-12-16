/*
 * @Author:Wendy
 * @Date:2024-11-01 00:02:48
 * @LastEditors:Wendy
 * @LastEditTime:2024-12-17 00:44:58
 * @Description:
 */
export default function TabButton({children, onClick, isSelected}) {
  console.log('TabButton');
  
  
  return (
    <li>
      <button className={isSelected ? 'active': ''} onClick={onClick}>{children}</button>
    </li>
  )
}