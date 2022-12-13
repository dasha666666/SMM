import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import CasesPage from "./components/CasesPage/CasesPage";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/service" element={<ServicesPage />} />
      <Route path="/cases" element={<CasesPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;
