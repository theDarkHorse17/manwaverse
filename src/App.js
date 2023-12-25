import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './pages/header';
import Body from './pages/body';
function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Header/>}/> */}
      <Route path='/' element={<Body/>}/>
    </Routes>
  )
}

export default App;
