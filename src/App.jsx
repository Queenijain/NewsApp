
import Navbar from "./Components/Navbar";
import ThemeButton from "./Components/ThemeButton";
import { NewsProvider } from "./Context/News/NewsContext";
import Home from "./Pages/Home";


function App() {


  return (
  <NewsProvider>
     <Navbar/>
      <ThemeButton/>
       <Home/>
  </NewsProvider>
  )
}

export default App;
