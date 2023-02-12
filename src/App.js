import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/cast' element={<Casts />} /> */}
      </Routes>
    </main>
  )
}

export default App
