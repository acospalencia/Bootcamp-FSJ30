import './App.css'
import { ListCharacters } from './views/listCharacters/ListCharacters';
import { FavoritesDataProvider } from './context/FavoritesContext';
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <FavoritesDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListCharacters />} />

          </Routes>
        </BrowserRouter>
      </FavoritesDataProvider>

    </>
  )
}

export default App
