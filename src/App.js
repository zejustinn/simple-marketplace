import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Hats from "./routes/hats/hats.component";
import Jackets from "./routes/jackets/jackets.component";
import Sneakers from "./routes/sneakers/sneakers.component";
import Womens from "./routes/womens/womens.component";
import Mens from "./routes/mens/mens.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} />
      </Route>
    </Routes>
  );
}

export default App;
