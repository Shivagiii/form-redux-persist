import { Routes, Route } from "react-router-dom";
import PersonalInfo from "../pages/PersonalInfo";
import ContactInfo from "../pages/ContactInfo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/contact-info" element={<ContactInfo />} />
    </Routes>
  );
};
export default AppRoutes;
