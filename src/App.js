import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Index from './pages/index';
import AddItem from './pages/addItem';
import InfoItem from './pages/infoItem';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='addItem' element={<AddItem/>}/>
                <Route path='infoItem/:itemId' element={<InfoItem/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
