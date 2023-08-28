import Topbar from "./components/Topbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const user = true;
  return (
  <Router>
    <Topbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/write" element={user ? <Write/>  : <Register />} />
        <Route path="/settings" element={user ? <Settings/> : <Register/>} />
        <Route path="/post/:id" element={user ? <Single/> : <Register />} />
      </Routes>
    
  </Router>
  )
};

export default App;
