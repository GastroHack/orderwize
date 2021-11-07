import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";
import useWindowDimensions from "./utils/useWindowDimensions";
import LoginPage from "./pages/LoginPage";
import HotelRestaurantPage from "./pages/HotelRestauranPage";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/login" 
        element={<LoginPage />}>

        </Route>
        <Route
          path="/hotel-restaurant"
          element={<HotelRestaurantPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
