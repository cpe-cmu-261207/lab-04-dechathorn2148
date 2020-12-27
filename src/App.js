import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA() {
    // TODO 
    console.log(myCourses)
    setGPA(GPA)
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    
    event.preventDefault();
    // TODO
    const Credit = document.querySelector('#CreditSubject').value
    const Grade = document.querySelector('#GradeSubject').value
    const Course = document.querySelector('#NameSubject').value
    const ID = document.querySelector('#IDSubject').value
    setMyCourse([...myCourses, {Date: Date.now(), key: myCourses.length, NameSubject: Course, IDSubject: ID , GradeSubject: Grade, CreditSubject: Credit}])
   
    // recalculate GPA
    calculateGPA();
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
    setMyCourse(myCourses.filter(Courses => Courses.Date !== id))
  }
  const select = {
    width: 150,
    marginRight: 10
  }
  const button = {
    marginLeft: '45%',
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
  }
  const input = {
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
  }
  const font = {
    fontFamily: 'san-serif'
  }
  const Input = () => {
    return (
      <>
        <div className="text-center p-3">
          <input type = "text" id = "NameSubject" placeholder = "ชื่อวิชา" style = {input} />
          <input type = "text" id = "IDSubject" placeholder = "รหัสวิชา" style = {input}/>
          <select type = "radio" id = "CreditSubject" style = {input} style = {select}>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          </select>
          <select type = "radio" id = "GradeSubject"  style = {input} style = {select} >
          <option value = "A">A</option>
          <option value = "B+">B+</option>
          <option value = "B">B</option>
          <option value = "C+">C+</option>
          <option value = "C">C</option>
          <option value = "D+">D+</option>
          <option value = "D">D</option>
          <option value = "F">F</option>
          <option value = "W">W</option>
          </select>
          <br /><button type = "submit" style = {button} onClick = {addCourse}>เพิ่ม</button>
        </div>
      </>
    )
  }
  const Output = (props) => {
    return (
      <>
        <div className="text-center p-3">
          <label for = "GPA">GPA : {props.GPA}</label>
        </div>
      </>
    )
  }


  return (
    <div className="container mx-auto h-screen" style = {font}>
      <h1 className="text-center text-4xl p-3 tracking-widest" style = {{fontSize: 'bold'}}>
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3" style = {{fontSize: 'bold'}}>My courses</h1>
        { myCourses.map(Courses =><CourseCard key = {Courses.key} Name = {Courses.NameSubject} ID = {Courses.IDSubject} Date = {Courses.Date}
          Grade = {Courses.GradeSubject} Credit = {Courses.CreditSubject} onCompleteClick = {(e) => onDeleteCourse(e)} />) }
      </div>
      { <Input />}
      { <Output GPA = {GPA} />}
    </div>
  );
}

export default App;
