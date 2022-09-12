import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blog from "./pages/blog";
import AboutMe from "./pages/aboutme";
import BlogPost from "./pages/blogpost";

function App() {
  return (
    <Router>
        <NavBar home_page={"/"} links={["/aboutme", "https://github.com/AnishTheWizard"]} title={"Anish's Anecdotes"} buttons={["About Me", "GitHub"]}/>
        <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path={'/:post'} element={<BlogPost />} />
        </Routes>

    </Router>
  );
}

export default App;
