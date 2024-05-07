import './App.css';
import 'flowbite';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <body>
      <div>
      <Navbar />
    < Header />
    <Services/>
    <Banner />
    <Footer />
    </div>
    {/* <script src="../node_modules/flowbite/dist/flowbite.min.js"></script> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

  
    </body>
    
    
    
  );
}

export default App;
library.add(fab, fas, far)
