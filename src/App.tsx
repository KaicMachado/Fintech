import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import { DaataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import "./Style.css";
function App() {
 return (
  <DaataContextProvider>
   <div className="container">
    <SideNav />
    <main>
     <Header />
     <Resumo />
    </main>
   </div>
  </DaataContextProvider>
 );
}

export default App;
