import Bridegroom from './components/Bridegroom';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Organization from './components/Organization';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import ColorsPage from './components/ColorsPage';
import Story from './components/Story';
import Where from './components/Where';

function App() {
  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Organization />
        {/* <Gallery /> */}
        {/* <Where /> */}
        <RSVP />
        <ColorsPage />
        {/* <Seeyou /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
