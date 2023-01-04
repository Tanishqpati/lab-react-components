import './App.css';
import GallaryFooter from './components/GallaryFooter';
import NavBar from "./components/NavBar";
import Images from './components/Images';


function App() {
  return (
    <div>
      <NavBar/>

     <Images/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
