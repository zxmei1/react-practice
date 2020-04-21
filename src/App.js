import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

    constructor(props) {

        super(props);

        const courses = [];
        const myCourses = [];
        const columns = ['College', 'Department', 'Number', 'Section', 'Professor'];
        const filterTerms = {college:"", department:"", number:"", section:"", professor:""};

        this.state = {
            columns, courses, myCourses, filterTerms,
        };
    };


    getCourses = () => {
        this.setState({
            courses: allCourses
        });
    };

    addCourse = (course) => {
        let {myCourses} = this.state;
        myCourses = myCourses.filter(individualcourse => individualcourse.key !== course.key);
        myCourses.push(course);
        this.setState({myCourses});

    };

    deleteCourse = (course) => {
        let {myCourses} = this.state;
        myCourses = myCourses.filter((thiscourse) => thiscourse.key !== course.key);
        this.setState({myCourses});
    };

    onCollegeChange = (event) => {
        let {filterTerms} = this.state;
        const col = event.target.value;
        filterTerms.college = col;
        this.setState({filterTerms});
    };

    onDepartmentChange = (event) => {
        let {filterTerms} = this.state;
        const dpt = event.target.value;
        filterTerms.department = dpt;
        this.setState({filterTerms});
    };

    onNumberChange = (event) =>  {
        let {filterTerms} = this.state;
        const num = event.target.value;
        filterTerms.number = num;
        this.setState({filterTerms});
    };

    onSectionChange = (event) => {
        let {filterTerms} = this.state;
        const sec = event.target.value;
        filterTerms.section = sec;
        this.setState({filterTerms});
    };

    onProfessorChange = (event) => {
        let {filterTerms} = this.state;
        const prof = event.target.value;
        filterTerms.professor = prof;
        this.setState({filterTerms});
    };

    courseFilter = (course, filterTerms) => {
        const {college, department, number, section, professor} = filterTerms;
        if (college === "" || course.college.startsWith(college)) {
            if (department === "" || course.department.startsWith(department)) {
                if (number === "" || course.number.startsWith(number)) {
                    if (section === "" || course.section.startsWith(section)) {
                        if (professor === "" || course.professor.startsWith(professor)) {
                            return true};
                        };
                    };
                };
            };
        return false;
    };

    render() {
        const {columns, courses} = this.state;
        return (
            <div className="App">
                <table>
                    <thead>
                    <tr>
                        <td><button onClick={this.getCourses}>Get courses</button></td>
                    </tr>
                    <tr><td>Course List</td></tr>
                    <tr>
                        {columns.map(column => <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        <tr>
                            <td><input type={"text"} onChange={this.onCollegeChange}/></td>
                            <td><input type={"text"} onChange={this.onDepartmentChange}/></td>
                            <td><input type={"text"} onChange={this.onNumberChange}/></td>
                            <td><input type={"text"} onChange={this.onSectionChange}/></td>
                            <td><input type={"text"} onChange={this.onProfessorChange}/></td>
                        </tr>}
                    {this.state.courses
                        .filter(course => this.courseFilter(course, this.state.filterTerms))
                        .map(course => <tr key={course.key}>
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
                    <tr><td>My Courses</td></tr>
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
    constructor(college, dpt, num, section, prof) {
        this.college = college;
        this.department = dpt;
        this.number = num;
        this.section = section;
        this.professor = prof;
        this.key = college + dpt + num;
    }
};

const allCourses = [
    new Course('CAS', 'PY', '251', 'A1', 'Sushkov', 'CAS PY 251'),
    new Course('CAS', 'CS', '111', 'C1', 'Sullivan', 'CAS CS 111'),
    new Course('CAS', 'CS', '350', 'A1', 'Sarkar', 'CAS CS 350'),
    new Course('SHA', 'HF', '100', 'BB', 'Anyone', 'SHA HF 100'),
    new Course('PDP', 'WF', '101', 'B1', 'Michelle', 'PDP WF 101'),
];


export default App;
