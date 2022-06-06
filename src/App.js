import logo from './logo.svg';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  /*const [show, setShow] = useState (true) */
  const [page, setPage] = useState({path:'list, param:'1'})
  
  return (
    <div className="App">
    <button onClick = {() => setPage({...page, path:'list'})}>Lista</button>
{/*{page.path ==='list'&& <ItemListContainer greeting="Bienvenido" handLePage={setPage}/>}*/}
{/*{page.path=== 'detail' && <ItemDetailContainer id={page.param}/>}*/}

<BrowserRouter>
  <NavBar/>
<Routes>
  <Route path='/'element={<ItemListContainer/>}/>
   <Route path='/detail/:productId'element={<ItemDetailContainer/>}/> 
  <Route path='/about'element={<h1> ABOUT </h1>}/>
  <Route/>
</Routes>
</BrowserRouter>
        
        <CartWidget/>
        <ItemListContainer greeting="SoftOne"/>
        <ItemCount/>
        <ItemCount stock={10}/>
        <ItemDetailContainer/>
          {/*{ show ? <ItemCount/> : null}*/}
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
