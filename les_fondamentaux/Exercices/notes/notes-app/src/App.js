import React from 'react';

import GradeInput from './GradeInput.js'
import Grades from './Grades.js'
import Average from './Average.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
    }
    this.handleNewGrade = this.handleNewGrade.bind(this);
  }

  handleNewGrade = (newGrade) => {
    let newGrades = this.state.grades;
    newGrades.push(newGrade);
    this.setState({ grades: newGrades });
  }

  render() {
    return (
      <div className="App">
        <h1>Grade Manager</h1>
        <GradeInput handleNewGrade={this.handleNewGrade} />
        <Grades data={this.state} />
        <Average data={this.state} />
      </div>
    )
  }
}


export default App;