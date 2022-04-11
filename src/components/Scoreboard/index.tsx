import React, {useState} from 'react';

import '../Scoreboard/styles.css'
import Manchester from '../../assets/manchester-city.png';
import Liverpool from '../../assets/liverpool.png';

const ScoreBoard: React.FC = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [goal, setGoal] = useState(0);
  const [goalAdversary, setGoalAdversary] = useState(0);
  const date = new Date("Jul 10, 2022 00:00").getTime();

  const notify = ((team:string)=> {
    if (Notification.permission === "granted") {
      showNotify(team)
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if(permission === "granted") {
            showNotify(team)
          }
        })
    }
  })

  const showNotify = ((team:string)=> {
    if(team === 'LIV') {
      const notification = new Notification('Alerta de Gol', {
        body: 'Gooool do ' + team + ' ⚽',
        icon: Liverpool,
      });
    } else if (team === 'MCI') {
      const notification = new Notification('Alerta de Gol', {
        body: 'Gooool do ' + team + ' ⚽',
        icon: Manchester,
      });
    }
  })

  var timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = date + now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);

  const goalLIV = (()=> {
    setGoal(goal+1)
    notify('LIV')
  })

  const goalMCI = (()=> {
    setGoalAdversary(goalAdversary+1)
    notify('MCI')
  })

  return(
    <>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '96px'}}>
        <div className="pl-scoreboard">
          <div className="team home">
            <div className="color"></div>
            <div className="name"><span style={{cursor: 'pointer'}} onClick={(event: any) => {goalLIV()}}>LIV</span></div>
          </div>

          <div className="logo">
            <img src="https://selimdoyranli.com/cdn/pl-scoreboard/pl-lion.svg" draggable="false" />
          </div>

          <div className="goals">
            <div className="goal home"><span>{goal}</span></div>
              <div className="divider"><span>-</span></div>
              <div className="goal away"><span>{goalAdversary}</span></div>
            </div>

          <div className="time">
            <span>
              <span className="minute">{minutes}</span>
              <span className="time-divider">:</span>
              <span className="second">{seconds}</span>
            </span>
          </div>

          <div className="team away">
            <div className="color"></div>
              <div className="name"><span style={{cursor: 'pointer'}} onClick={(event: any) => {goalMCI()}}>MCI</span></div>
            </div>
         </div>
      </div>
    </>
  )
}
export default ScoreBoard;
