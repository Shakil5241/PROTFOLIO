import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/productList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./Context";
import Footer from "./components/Footer/Footer";

const App = () => {
  const theme = useContext(ThemeContext)
  const  darkMode =theme.state.darkMode;
  return <div
  style={{
    backgroundColor:darkMode ? "#222" : "white" ,
    color:darkMode && "white"
  }}
>
    
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    <Footer/>
    </div>;
 
};

export default App;