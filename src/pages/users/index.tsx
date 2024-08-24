import { Route, Routes } from "react-router-dom";

function UserApp() {
    return (
      <Routes>
        <Route index element={<h1>用户首页</h1>} />
      </Routes>
    );
  }

  export default UserApp