import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
