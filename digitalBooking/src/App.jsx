import { BodyHome } from './components/BodyHome';
import { Route, Routes } from 'react-router-dom';
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Producto } from './components/Producto';
import { GaleriaModalFotos } from './components/GaleriaModalFotos';
import { UbicationBlock } from './components/UbicationBlock';
import { SuccessfulBooking } from './components/SuccessfulBooking';
import { ViewFront } from "./components/ViewFront";
import { Booking } from "./components/Booking";
import { SuccessfulProduct } from "./components/SuccessfulProduct";
import { Administration } from "./components/Administration";
import  DataProvider from './context/DataProvider'
import { MyBookings } from './components/MyBookings';



export function App() {
  return (
      <DataProvider>
       <Routes>
          <Route path='/' element={<BodyHome />} />
          <Route path='/:idCity' element={<BodyHome />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/producto/:id' element={<Producto />} />
          <Route path='/galeriaModal' element={<GaleriaModalFotos />}/>
          <Route path='/ubicationBlock' element={<UbicationBlock />}/>
          <Route path='/reserva-exitosa' element={<SuccessfulBooking />}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/producto-exitoso' element={<SuccessfulProduct />}/>
          <Route path='/administration' element={<Administration/>}/>
          <Route path='producto/:id/reserva' element={<Booking/>}/>
          <Route path='/mis-reservas' element={<MyBookings />}/>
          <Route path='/viewFront' element={<ViewFront />}/>
        </Routes>
      </DataProvider>
  );
}


