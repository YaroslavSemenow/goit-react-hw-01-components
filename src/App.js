import Container from 'components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data/statistics.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}
