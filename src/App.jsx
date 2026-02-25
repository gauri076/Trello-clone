
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'

function App() {


  return (
    <>
    <Header></Header>
    <div className='content flex'>
       <Sidebar></Sidebar>
    <Main></Main>
    </div>
   
    </>
  )
}

export default App
