import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./Components/user/Menu/Index";
import ProtectedRoutes from "./Routes/Index";

function App() {
  return (
    <div className="App">
      <Menu />
      <ProtectedRoutes />
    </div>
  );
}

export default App;
