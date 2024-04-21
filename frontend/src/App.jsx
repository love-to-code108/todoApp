import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"

// IMPORTING ATOMS HERE
import { useRecoilValue } from "recoil"
import { USER_atom } from "./recoil/user-atom"

// CSS
import "./custom.css"
import { PageNotFound } from "./pages/PageNotFound"
import { Main } from "./pages/Main"


function App() {

  const USER = useRecoilValue(USER_atom)


  // CHECKING IF COOKIE PRESENT OR NOT



  // TRYING TO GET 

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        {/* <Route path="/main" element={ USER ? <Main /> : <SignInPage/>}></Route> */}
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
    </div>
  )
}

export default App
