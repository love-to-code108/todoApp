import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"


// CSS
import "./custom.css"
import { PageNotFound } from "./pages/PageNotFound"
import { LoadingPage } from "./pages/LoadingPage"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/signin" element={<SignInPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        {/* <Route path="/loading" element={<LoadingPage/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
