const top100Uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const top100AlltimeUri = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

const TOP_100 = 'top100';
const TOP_100_ALL_TIME = 'top100Alltime';

const state = mobx.observable({
  top100: [],
  top100Alltime: [],
  filter: TOP_100_ALL_TIME
});

const Controls = () => {
  const changeFilter = (event) => {
    state.filter = event.target.checked ? TOP_100 : TOP_100_ALL_TIME;
  };
  return (
    <div className='controls'>
      <label for='filter'>30 Days</label>
      <input id='filter' type='checkbox' onChange={changeFilter} />
    </div>
  );
};

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
    <img src={ img } className='profile'/>
  </div>
);

const Leaderboard = mobxReact.observer(() => {
  const top = state[state.filter];
  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      { top.map((user) => <User {...user} />)}
    </div>
  );
});

const Footer = () => (
  <div className='footer'>
    <h4>by <a href='https://github.com/janis-kra'>Janis Krasemann</a></h4>
  </div>
);

const App = mobxReact.observer(() => {
  fetch(top100Uri).then((result) => result.json()).then((top100) => {
    state.top100 = top100;
  });
  fetch(top100AlltimeUri).then((result) => result.json()).then((top100) => {
    state.top100Alltime = top100;
  });

  return (
    <div>
      <Controls />
      <Leaderboard />
      <Footer />
    </div>
  );
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
