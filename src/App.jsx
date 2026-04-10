
import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Counter from "./components/Counter/Counter";
import NavBar from "./components/NavBar/NavBar";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import Steps from "./components/Steps/Steps";
import TransparentPricing from "./components/TransparentPricing/TransparentPricing";

const PricingPromise = fetch("pricingData.json").then((res) => res.json());
const simplePricingPromise  = fetch("simplePricingData.json").then((res) => res.json())

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <NavBar cartItems={cartItems}></NavBar>
      <Banner></Banner>
      <Counter></Counter>

      <Suspense fallback={<div>Loading...</div>}>
        <PremiumTools
          PricingPromise={PricingPromise}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </Suspense>

      <Steps></Steps> 
      //

      <Suspense fallback={<div>Loading...</div>}>
      <TransparentPricing 
      simplePricingPromise={simplePricingPromise}
      />
      </Suspense>
    </>
  );
}

export default App;
