import "./App.scss";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Admin
// import Login from "./components/admin/login/Login";
import AllStudent from "./components/admin/allStudent/AllStudent";
import Dashboard from "./components/admin/dashboard/Dashboard";
import CreateStudent from "./components/admin/createStudent/CreateStudent";
import AllTeacher from "./components/admin/allTeacher/AllTeacher";
import CreateTeacher from "./components/admin/createTeacher/CreateTeacher";
import AllClass from "./components/admin/allClass/AllClass";
import CreateClass from "./components/admin/createClass/CreateClass";
import Classroom from "./components/admin/classroom/Classroom";
import AddStuandTea from "./components/admin/addStuandTeaToClass/AddStuandTea";
import Subject from "./components/admin/subject/Subject";
import Schedule from "./components/admin/schedule/Schedule";

// Teacher
import Profile from './components/Teacher/profileTeacher/Profile';
import Dashbord from './components/Teacher/dashbordTeacher/Dashbord';
import Class from './components/Teacher/classroomTeacher/Class';
import ScheduleTeacher from './components/Teacher/scheduleTeacher/Schedule';
import Attendence from './components/Teacher/attendence/Attendence';
import Score from './components/Teacher/score/Score';
import Eachclass from './components/Teacher/classroomTeacher/Eachclass';
import Attendencelist from './components/Teacher/attendence/Attendence_list';
import Examresult from './components/Teacher/score/Exam_result';
import Assignment from './components/Teacher/assignments/assignment';
import AddAssignment from './components/Teacher/assignments/add_assignment';
import Lesson from './components/Teacher/lessonsTeacher/lesson';
import AddLesson from './components/Teacher/lessonsTeacher/add_lesson'

// Student
import Login from './components/login/Login';
import Home from './components/student/homepage/home';
import ProfileStudent from './components/student/profile/Profile';
import ScheduleStudent from './components/student/schedulepage/schedule';
import ScoreStudent from './components/student/scorepage/score';
import Attendance from './components/student/att_main/attendance_main';
import Attendance2 from './components/student/att_CG/attendancepage';
import AssiStudent from './components/student/assi_less/assi_student';
import ViewAssignment from './components/student/assi_less/view_all_assi'
import MainAssi from './components/student/assi_less/assign_main'
import ViewLesson from './components/student/assi_less/view_lesson'
import ViewLeStu from './components/student/assi_less/less_student'
import Navbar from './components/student/navbar/navall';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}

          {/* Admin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-student" element={<AllStudent />} />
          <Route path="/add-student" element={<CreateStudent />} />
          <Route path="/all-teacher" element={<AllTeacher />} />
          <Route path="/add-teacher" element={<CreateTeacher />} />
          <Route path="/all-class" element={<AllClass />} />
          <Route path="/add-class" element={<CreateClass />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/add-stu-and-teacher" element={<AddStuandTea />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/schedule" element={<Schedule />} />

          {/* Teacher */}
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/classroom" element={<Class />} />
          <Route path="/eachclass" element={<Eachclass />} />
          <Route path="/schedule" element={<ScheduleTeacher />} />
          <Route path="/attendance" element={<Attendence />} />
          <Route path="/attendance_list" element={<Attendencelist />} />
          <Route path="/score" element={<Score />} />
          <Route path="/exam_result" element={<Examresult />} />
          <Route path='/assignment'  exact element={<Assignment/>} />
          <Route path="/add-assignment/:id" element={<AddAssignment/>} />
          <Route path="/lesson" element={<Lesson/>} />
          <Route path="/add_lesson/:id" element={<AddLesson/>} />

          {/* Student */}
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={<AppWithNavbar />}
          />
        </Routes>
      </Router>
    </div>
  );
}

function AppWithNavbar() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';

  return (
    <>
      {!hideNavbar && (
        <div className='Menubar'>
          <Navbar />
        </div>
      )}

      <div className="app">
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path='/assignment' element={<AssiStudent />} />
          <Route path="/profile" element={<ProfileStudent />} />
          <Route path="/schedule" element={<ScheduleStudent />} />
          <Route path="/score" element={<ScoreStudent />} />
          <Route path="/attendance_main" element={<Attendance />} />
          <Route path="/attendancepage" element={<Attendance2 />} />
          <Route path='/assignment/viewassignment' element={<ViewAssignment/>} />
          <Route path='/assignment/todo' element={<MainAssi/>} />
          <Route path='/lesson' element={<ViewLeStu/>} />
          <Route path='/lesson/cg' element={<ViewLesson/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
