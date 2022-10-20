import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import Addstudents from './Pages/Admin/Addstudents';
import AddTeacher from './Pages/Admin/AddTeacher';
import UserProfile from './Pages/student/StudentProfile';
import StudentDashboard from './Pages/student/StudentDashboard';
import TeacherDashboard from './Pages/Teacher/TeacherDashboard';
import TeacherProfile from './Pages/Teacher/TeacherProfile';
import SingleStudent from './Pages/Teacher/SingleStudent';
import AddMessage from './Pages/Admin/AddMessage';
import ViewStudents from './Pages/Admin/ViewStudents';
import ViewTeacher from './Pages/Admin/ViewTeacher';
import TeacherViewStudents from './Pages/Teacher/TeacherViewStudents';

function App() {

return (
    
 <BrowserRouter>
<Routes>
				<Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/admindashboard' element={<AdminDashboard/>}/>
				<Route path='/addstudent' element={<Addstudents/>}/>
				<Route path='/addteacher' element={<AddTeacher/>}/>
				<Route path='/studentprofile' element={<UserProfile/>}/>
				<Route path='/studentdashboard' element={<StudentDashboard/>}/>
				<Route path='/teacherdashboard' element={<TeacherDashboard/>}/>
				<Route path='/teacherprofile' element={<TeacherProfile/>}/>
				<Route path='/singleStudent/:id' element={<SingleStudent/>}/>
				<Route path='/addmessage' element={<AddMessage/>}/>
				<Route path='/viewStudent' element={<ViewStudents/>}/>
				<Route path='/viewTeacher' element={<ViewTeacher/>}/>
				<Route path='/teacherviewstudents' element={<TeacherViewStudents/>}/>
				{/* <Route path='/' element={<Home/>}/> */}

				{/* <Route path='/' element={<Home/>}/> */}

 </Routes>
 </BrowserRouter>
  );
}

export default App;
