import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './component/home'
import Todos from './component/todo'
import PageNotFound from './component/PageNotFound'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/' />
          <Route path='/home' element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

function AppBar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => {
      navigate('/home');
    }}>Home</button>

    <button onClick={() => {
      navigate('/todos')
    }}>Todos</button>
  </div>
}

export default App
