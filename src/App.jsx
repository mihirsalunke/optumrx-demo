import { Router, Route, Routes } from "@solidjs/router";
import Home from "./pages/Home";
import DrugPricing from "./pages/DrugPricing";
import MedicationList from "./pages/MedicationList";
import OrderBuilder from "./pages/OrderBuilder";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderStatus from "./pages/OrderStatus";
import PharmacyLocator from "./pages/PharmacyLocator";
import PrescriptionDrugList from "./pages/PrescriptionDrugList";
import SavingsCenter from "./pages/SavingsCenter";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CustomWidget from "./pages/CustomWidget";
import AddSdes from "./pages/AddSdes";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/optumrx-demo" component={Home} />
        <Route path="/secure/drug-pricing" component={DrugPricing} />
        <Route path="/secure/medication-list" component={MedicationList} />
        <Route path="/secure/order-builder" component={OrderBuilder} />
        <Route path="/secure/order-confirmation" component={OrderConfirmation} />
        <Route path="/secure/order-status" component={OrderStatus} />
        <Route path="/secure/pharmacy-locator" component={PharmacyLocator} />
        <Route path="/secure/prescription-drug-list" component={PrescriptionDrugList} />
        <Route path="/secure/savings-center" component={SavingsCenter} />
        <Route path="/optumrx-demo/custom-widget" component={CustomWidget} />
        <Route path="/add-sdes" component={AddSdes} />
      </Routes>
    </Router>
  );
};

export default App;
