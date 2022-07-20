import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar></NavBar>}>
          <Route
            path='/Admin'
            element={
              <div className='flex w-screen h-screen items-center justify-center'>
                Chkeck the Dashboard ,This is just a trial ,Start your order to
                get the full website
              </div>
            }
          ></Route>
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
