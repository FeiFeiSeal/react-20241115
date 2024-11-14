import reactImg  from "../assets/react-core-concepts.png"
const arr = [113, 2223, 3335, 4440, 55578, 61258]
// 隨機從 arr 中取出一個數字
function randomNum() {
  return arr[Math.floor(Math.random() * arr.length)]
}


export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p> { randomNum() }</p>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
      
    </header>
  )
}