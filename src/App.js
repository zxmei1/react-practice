import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let courses = [
        new Course('CAS', 'PY', '251', 'A1', 'Sushkov', 'CAS PY 251'),
        new Course('CAS', 'CS', '111', 'C1', 'Sullivan', 'CAS CS 111'),
        new Course('CAS', 'CS', '350', 'A1', 'Sarkar', 'CAS CS 350'),
    ];
    return (
        <div className="App">
          <table>
            <thead>
              <tr>
                <th>College</th>
                <th>Department</th>
                <th>Number</th>
                <th>Section</th>
                <th>Professor</th>
              </tr>
            </thead>
            <tbody>
            {
              courses.map(course => <tr id={course.key}><th>{course.college}</th><th>{course.department}</th><th>{course.number}</th>
                <th>{course.section}</th><th>{course.professor}</th></tr>)
            }
            </tbody>
          </table>
        </div>
    );
  }

}

class Course {
  constructor(college, dpt, num, section, prof, key) {
    this.college = college;
    this.department = dpt;
    this.number = num;
    this.section = section;
    this.professor = prof;
    this.key = key;
  }
}


export default App;
