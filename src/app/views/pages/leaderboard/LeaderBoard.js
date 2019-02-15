import React from 'react';
import { connect } from 'react-redux';
import { getUserScore } from '../../../utils/helpers';
import UserScore from './UserScore';
import './leaderboard.scss';

/**
 * Ranking of users by created + answered questions
 */
const LeaderBoard = props => (
  <ol className="leader-board p-0">
    {props.userIds.map(id => (
      <li key={id}>
        <UserScore id={id} />
      </li>
    ))}
  </ol>
);

const mapStateToProps = ({ users }) => ({
  userIds: Object.keys(users).sort(
    (a, b) => getUserScore(users[b]).totalScore - getUserScore(users[a]).totalScore
  )
});

export default connect(mapStateToProps)(LeaderBoard);
