import React from 'react';
import { connect } from 'react-redux';
import { getUserScore } from '../../../utils/helpers';
import UserScore from './UserScore';
import './leaderboard.scss';

const LeaderBoard = props => (
  <ol className="leader-board">
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
