import React from 'react';


class Average extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: this.props.data.grades
    }
  }

  render() {
    let av = 0
    this.state.grades.forEach(grade => {
      av += parseInt(grade);
    });
    av /= this.state.grades.length;

    return (
      <div>
        <h3>Average:</h3>
        {
          av
        }
      </div>
    )
  }
}

export default Average;


