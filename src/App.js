import { Route, Routes } from "react-router-dom";
import "../src/app.css";
import NavBra from "./components/layout/NavBra";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home ";
import PageNoteFound from "./components/pages/PageNoteFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/pages/User";

function App() {
  return (
    <>
      <div className="app">
        <NavBra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<PageNoteFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
