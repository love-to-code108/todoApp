import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"

// IMPORTING USER HERE
import { useRecoilState } from "recoil"
import { authState_atom } from "./recoil/user-atom"
import { pullUSER } from "./localStorage/pullingTheUserObject"


// CSS
import "./custom.css"
import { PageNotFound } from "./pages/PageNotFound"
import { Main } from "./pages/Main"


function App() {



  // CHECKING IF COOKIE PRESENT OR NOT



  // TRYING TO GET THE USER OBJECT
  const[authState , setAuthState] = useRecoilState(authState_atom);
 


  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/main" element={ authState ? <Main /> : <SignInPage/>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        {/* <Route path="/main" element={<Main/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
