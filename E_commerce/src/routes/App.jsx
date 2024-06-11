import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";
import FetchItems from "../component/FetchItems";


function App() {


  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
