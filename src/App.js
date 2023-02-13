import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AllCast from './components/AllCast/AllCast'
import CastDetails from './components/CastDetails/CastDetails'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/cast' element={<Casts />} /> */}
      </Routes>
      <AllCast />
      <CastDetails/>
    </main>
  )
}

export default App
