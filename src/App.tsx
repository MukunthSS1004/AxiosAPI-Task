import "./App.css";
import UserTable from "./pages/UserPage"; 

function App() {

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">USERS From → API</h1>
      <UserTable />
    </div>
  );
}

export default App;
