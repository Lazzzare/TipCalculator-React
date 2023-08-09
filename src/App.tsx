import Header from "./components/Header";
import Inputs from "./components/Inputs";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center bg-[#C5E4E7] md:justify-center">
      <Header />
      <Inputs />
    </div>
  );
};

export default App;
