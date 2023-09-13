import  SearchVideo  from "./pages/SearchVideo";
import  Chatpage  from "./pages/Chatpage";
import "./style.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchVideo/>} />
        <Route path="/chat" element={<Chatpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;