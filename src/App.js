import './scss/main.scss'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service/Service';
import Video from './components/Video';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Promotion from './components/Promotion';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      <Header />
      <Banner />
      
      <About/>
      <Service/>
      <Video/>
      <Blog/>
      <Contact/>
      <Promotion/>
      <Footer/>
    </div>
  );
}

export default App;
