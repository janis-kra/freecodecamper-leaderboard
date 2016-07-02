const top100Uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const top100AlltimeUri = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

const Leaderboard = () => (
  <div className='leaderboard'>
    <h2>Leaderboard</h2>
  </div>
);

const Footer = () => (
  <div className='footer'>
    <h4>by <a href='https://github.com/janis-kra'>Janis Krasemann</a></h4>
  </div>
);

const App = () => {
  fetch(top100Uri).then((result) => result.json()).then((top100) => {
    // TODO: Set state (possibly with mobx or sth. similar)
  });
  fetch(top100AlltimeUri).then((result) => result.json()).then((top100) => {
    // TODO: Set state (possibly with mobx or sth. similar)
  });
  return (
    <div>
      <Leaderboard />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
