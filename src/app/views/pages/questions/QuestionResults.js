import React from 'react';
import UserCard from '../../common/UserCard';
import { connect } from 'react-redux';
import { computeResults } from '../../../utils/helpers';
import OptionResults from './OptionResults';

/**
 * Card that informs about the voting stats of a particular question
 */
const QuestionResults = ({
  question: { author, optionOne, optionTwo },
  authedUser
}) => {
  const totalVotes = optionOne.votesNumber + optionTwo.votesNumber;
  return (
    <UserCard
      authorName={author.name}
      avatarURL={author.avatarURL}
      askedBy={true}
    >
      <div className="card-block pl-3">
        <OptionResults
          option={optionOne}
          totalVotes={totalVotes}
          chosen={optionOne.votes.includes(authedUser)}
          className="mb-3"
        />
        <OptionResults
          option={optionTwo}
          totalVotes={totalVotes}
          chosen={optionTwo.votes.includes(authedUser)}
        />
      </div>
    </UserCard>
  );
};

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const { optionOnePercentage, optionTwoPercentage } = computeResults(
    optionOneVotes,
    optionTwoVotes
  );

  return {
    question: {
      ...question,
      author: users[question.author],
      optionOne: {
        ...question.optionOne,
        votesNumber: optionOneVotes,
        votesPerc: optionOnePercentage
      },
      optionTwo: {
        ...question.optionTwo,
        votesNumber: optionTwoVotes,
        votesPerc: optionTwoPercentage
      }
    },
    authedUser
  };
};

export default connect(mapStateToProps)(QuestionResults);
