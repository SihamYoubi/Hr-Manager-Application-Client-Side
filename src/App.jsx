import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import EmployeePage from "./components/EmployeePage"
import LeaveRequestForm from "./components/leaveRequestForm"
import LeaveRequestsList from "./components/LeaveRequestsList"

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<h1>This the main page</h1>} />
          <Route path = '/sign-in' element={<SignIn />} />
          <Route path='/employee' element={< EmployeePage/>}  />
          <Route path='/leave-request' element={<LeaveRequestForm/>} />
          <Route path='leave-requests-list' element={<LeaveRequestsList/>}/>
        </Routes>
        </Router>
  )
}

export default App
