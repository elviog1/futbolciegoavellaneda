import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Games from './pages/Games'
import Home from './pages/Home'
import Players from './pages/Players'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/jugadores' element={ <Players />} />
          <Route path='/detail' element={ <Detail />} />
          <Route path='/nosotros' element={ <About />} />
          <Route path='/contacto' element={ <Contact />} />
          <Route path='/partidos' element={ <Games />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
