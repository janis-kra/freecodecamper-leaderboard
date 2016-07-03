const top100Uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
// const top100AlltimeUri = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

const state = mobx.observable({
  top100: [],
  top100Alltime: []
});

const User = ({ username, alltime, recent, img }) => (
  <div className='user'>
    <div className='username'>
      { username }
    </div>
    <div className='alltime'>
      { alltime }
    </div>
    <div className='recent'>
      { recent }
    </div>
    <img src={ img } className='img'/>
  </div>
);

const Leaderboard = mobxReact.observer(() => (
  <div className='leaderboard'>
    <h2>Leaderboard</h2>
    { state.top100.map((user) => <User {...user} />)}
  </div>
));

const Footer = () => (
  <div className='footer'>
    <h4>by <a href='https://github.com/janis-kra'>Janis Krasemann</a></h4>
  </div>
);

const App = mobxReact.observer(() => {
  fetch(top100Uri).then((result) => result.json()).then((top100) => {
    state.top100 = top100;
  });
  // fetch(top100AlltimeUri).then((result) => result.json()).then((top100) => {
  //   state.top100Alltime = top100;
  // });
  return (
    <div>
      <Leaderboard />
      <Footer />
    </div>
  );
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
