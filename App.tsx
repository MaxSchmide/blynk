import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  useLocalStorage();

  return (
    <>
      <Toaster />
      <HomePage />
    </>
  );
}

export default App;
