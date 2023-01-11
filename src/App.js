import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import BannerCards from './components/BannerCards/BannerCards'
import About from './components/About/About'
import Services from './components/Services/Services'
import Clients from './components/Clients/Clients'
import Projects from './components/Projects/Projects'
import Comments from './components/Comments/Comments'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div id='home' style={{height: '60px',}}/>
      <Banner />
      <BannerCards />
      <div id='about' style={{height: '60px',}}/>
      <About />
      <div id='service' style={{height: '60px',}}/>
      <Services />
      <div id='client' style={{height: '60px',}}/>
      <Clients />
      <div id='project' style={{height: '60px',}}/>
      <Projects />
      <div id='testimonial' style={{height: '60px',}}/>
      <Comments />
      <div id='contact' style={{height: '60px',}}/>
      <Footer />
    </div>
  );
}

export default App;
