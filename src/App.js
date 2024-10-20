import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CalendarPage from "./Components/Scheduler/Scheduler";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <CalendarPage />
      <Footer />
    </div>
  );
}

export default App;
