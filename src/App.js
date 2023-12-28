import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Index from './pages/index';
import AddItem from './pages/addItem';
import InfoItem from './pages/infoItem';
import Store from './store/store';

function App() {
  return (
      <Store>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='addItem' element={<AddItem/>}/>
                <Route path='infoItem/:itemId' element={<InfoItem/>}/>
            </Routes>
        </BrowserRouter>
      </Store>
  )
}

export default App;
