export default function TabButton({children, onClick}) {
  console.log('TabButton');
  
  
  return <li onClick={onClick}><button>{children}</button></li>
}