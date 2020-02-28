import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


    constructor(props) {

        super(props);

        const courses = [];
        const myCourses = [];
        const columns = ['College', 'Department', 'Number', 'Section', 'Professor']

        this.state = {
            columns, courses, myCourses
        };
        this.getCourses = this.getCourses.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    };

    getCourses() {
        this.setState({
            courses: [
                new Course('CAS', 'PY', '251', 'A1', 'Sushkov', 'CAS PY 251'),
                new Course('CAS', 'CS', '111', 'C1', 'Sullivan', 'CAS CS 111'),
                new Course('CAS', 'CS', '350', 'A1', 'Sarkar', 'CAS CS 350'),
            ]
        });
    };

    addCourse(course) {
        let {myCourses} = this.state;
        if (myCourses.includes(course) === false) {
            myCourses.push(course);
            this.setState({myCourses});
        };
    };

    deleteCourse(course) {
        let {myCourses} = this.state;
        myCourses = myCourses.filter((thiscourse) => thiscourse.key !== course.key);
        this.setState({myCourses});
    };

    render() {
        const {columns, courses} = this.state;
        return (
            <div className="App">
                <table>
                    <thead>
                    <tr>
                        <button onClick={this.getCourses}>Get courses</button>
                    </tr>
                    <tr>Course List</tr>
                    <tr>
                        {columns.map(column => <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.courses.map(course => <tr key={course.key}>
                            <td>{course.college}</td>
                            <td>{course.department}</td>
                            <td>{course.number}</td>
                            <td>{course.section}</td>
                            <td>{course.professor}</td>
                            <td>
                                <button onClick={() => this.addCourse(course)}>Add to my courses</button>
                            </td>
                        </tr>)
                    }
                    <tr>My Courses</tr>
                    {
                        this.state.myCourses.map(myCourse => <tr key={myCourse.key}>
                          <td>{myCourse.college}</td>
                          <td>{myCourse.department}</td>
                          <td>{myCourse.number}</td>
                          <td>{myCourse.section}</td>
                          <td>{myCourse.professor}</td>
                          <td>
                            <button onClick={() => this.deleteCourse(myCourse)}>Delete</button>
                          </td>
                        </tr>)
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
