import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IdCard from './pages/IdCard';
import Contact from './pages/Contact';
import CommentCard from './pages/CommentCards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const client = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus : false
  }
}})
function App() {
  return (
    <QueryClientProvider client={client}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<IdCard />}></Route>
        <Route path='/idDetails'element={<CommentCard />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />     
    </Router>
    </QueryClientProvider>
  );
}

export default App;
