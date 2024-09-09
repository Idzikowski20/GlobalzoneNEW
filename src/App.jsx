import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import  HomePage  from './components/HomePage/Homepage'

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />}/>
    </Routes>
 </Router>
  );
}

export default App;
