import React from 'react';


class GradeInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let newGrade = event.target.childNodes[0].value;
    this.props.handleNewGrade(newGrade);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}><input></input></form>
      </div>
    )
  }
}

export default GradeInput;


