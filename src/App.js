import Routes from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/ConfirmedBooking';
import pages from './utils/pages';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';

const App = () => {
  return (
    <>
      <Header />
      <Main>
      <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
          <Route path={pages.get('home').path} element={<Home />} />
          <Route
            path={pages.get('about').path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get('menu').path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={pages.get('orderOnline').path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get('login').path}
            element={<UnderConstruction />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
      <Layout />
    </>
  );
};
export default App;