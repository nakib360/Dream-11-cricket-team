import { useState } from "react";
import Players from "./Components/Body/Players";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coins, setCoins] = useState(0);

  const handleAddMoney = () => {
        setCoins(prev => prev + 5000000);
        toast.success("1000000 coin succesfuly added.");
  };

  return (
    <>
      <Header coins={coins} handleAddMoney={handleAddMoney} />
      <Players coins={coins} setCoins={setCoins} />
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
