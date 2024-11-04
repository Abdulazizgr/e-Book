import "./App.css";
import { Footer, Header, ScrollToTop } from "./components";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
