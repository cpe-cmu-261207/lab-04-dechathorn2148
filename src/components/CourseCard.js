import { findByLabelText, render } from "@testing-library/react";

export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  const styles = {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    backgroundColor: 'white'
  }
  const button = {
    color: 'red',
    float: 'right'
  }
  return (
    <div style = {styles}>
     <label for = "SubjectID">{props.ID}</label> <button id = 'delete' style = {button} onClick = {() => props.onCompleteClick(props.Date)}>X</button>
      <br />
      <label for = "SubjectName">{props.Name}</label><br />
      <label for = "Credit">Credit : {props.Credit}</label><br />
      <label for = "Grade">Grade : {props.Grade}</label>
    </div>
  );
};
