import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Login from "./Login";
import Register from "./Register";
import Packages from "./Packages";
import Home from "./Home";
import Destinations from "./Destination";
import Offer from "./Offers";
import Testimonial from "./Review";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MapPage from "./Map";
import DetailsPage from "./Details";
import DetailsMap from "./DetailsMap";
import Dashboard from "./Dashboard";
import Details from "./Details";
import ContactForm from "./Contactus";
import Aboutus from "./Aboutus";
import Payment from "./Payment";
import FavoritePage from "./Favorite";
import { WishlistProvider } from "./WishlistContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster richColors />
        <WishlistProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/destination" element={<Destinations />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/review" element={<Testimonial />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/detail/:locationId" element={<DetailsMap />} />
            <Route path="/users/:id" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contactus" element={<ContactForm />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/search" element={<search />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </WishlistProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
