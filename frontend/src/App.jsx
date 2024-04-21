import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"

// IMPORTING ATOMS HERE

// CSS
import "./custom.css"
import { PageNotFound } from "./pages/PageNotFound"
import { Main } from "./pages/Main"


function App() {



  // CHECKING IF COOKIE PRESENT OR NOT



  // TRYING TO GET THE USER OBJECT
  const userFromSessionStorage = sessionStorage.getItem("USER");
  const USER = JSON.parse(userFromSessionStorage);



  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/main" element={ USER ? <Main /> : <SignInPage/>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        {/* <Route path="/main" element={<Main/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
