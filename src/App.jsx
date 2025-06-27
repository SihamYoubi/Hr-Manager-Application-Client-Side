import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import LeaveRequestForm from "./components/LeaveRequestForm"

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<h1>This the main page</h1>} />
          <Route path = '/sign-in' element={<SignIn />} />
          <Route path='/leave-request' element={<LeaveRequestForm />} />   
        </Routes>
        </Router>
  )
}

export default App
