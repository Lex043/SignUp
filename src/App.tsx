import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Success from "./components/Success";

const App = () => {
  return (
    <main className="bg-[#A1CBE2] min-h-screen">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </main>
  );
};

export default App;
