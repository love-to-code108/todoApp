import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/signin" element={<SignInPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
