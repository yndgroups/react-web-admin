import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/login/index.tsx";
import Home from "@/pages/home/index.tsx";
import Users from "@/pages/users/index.tsx";
import Menus from "../components/menu";
import Headers from "../components/headers";

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Headers />
          <main className="flex">
            <nav className="w-[200px] bg-gray-100 h-[calc(100vh-60px)]">
              <Menus />
            </nav>
            <div className="flex-1 bg-gray-200 h-[calc(100vh-60px)] overflow-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/home/*" element={<Home />} />
              <Route path="/users/*" element={<Users />} />
            </Routes>
            </div>
          </main>
      </BrowserRouter>
    </>
  );
}
