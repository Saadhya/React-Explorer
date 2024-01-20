import Login from "./components/Login";
import Profile from "./components/Profile";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Login />
        <Profile/>
      </UserProvider>
    </>
  );
}

export default App;
