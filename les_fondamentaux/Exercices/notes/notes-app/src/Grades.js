import React from 'react';


class Grades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: this.props.data.grades
    }
  }

  render() {
    return (
      <div>
        <h3>Grades:</h3>
        <ul>
          {
            this.state.grades.map((g) =>
              <li>{g}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Grades;


