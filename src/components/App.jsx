import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { FeedbackData } from './FeedbackData/FeedbackData';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackScore = event => {
    const clickedButton = event.target.textContent;
    // this.setState(prevState => {
    //   return {
    //     [clickedButton]: (prevState[clickedButton] += 1),
    //   };
    // });
    //более лаконичная запись: неявный возврат; функция возвращает объект, если не поставть () после =>, то интерпретатор расценит {} как тело функции.
    //поэтому ставим () чтобы интерпретатор понял, что мы возвращаем некую сущность - {объект}
    this.setState(prevState => ({
      [clickedButton]: (prevState[clickedButton] += 1),
    }));
  };

  countTotalFeedback = () => {
    const arrToSum = Object.values(this.state);
    // arrToSum.reduce((total, score) => {
    //   return score + total;
    // }, 0);
    return arrToSum.reduce((total, score) => {
      return score + total;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedbackScore}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <FeedbackData
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalScore={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
