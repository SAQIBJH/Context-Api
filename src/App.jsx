
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";


function App() {

 
  
  return (
    <div className="max-w-screen-full h-screen mx-auto bg-slate-400">
      <UserContextProvider>
        <Login />
        <Profile/>
      </UserContextProvider>
    </div>
  );
}

export default App
