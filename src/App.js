import { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";


const init = () =>{
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

function App() {

  const [state, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
   if( !state) return

   localStorage.setItem('user', JSON.stringify(state))
  
  }, [state])
  
  return (

    <AuthContext.Provider value={{
      state,
      dispatch
    }} >
       <AppRouter/>
    </AuthContext.Provider>
  );
}

export default App;
