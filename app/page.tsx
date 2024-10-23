import Header from './components/header/haeder';
import Aboutus from './components/Aboutus/about';
import Services from './components/services/service';
import PortFolio from './components/portfolio/portfolio';
import Footer from './components/Footer/footer'
const LandingPage = () => {
    return (
        <div>
           <Header></Header> 
           <Aboutus></Aboutus>
           <Services></Services>
           <PortFolio></PortFolio>
           <Footer></Footer>
          </div>
    )
}
export default LandingPage;