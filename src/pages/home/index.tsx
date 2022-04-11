import React from 'react';

import Header from '../../components/Header';
import Scoreboard from '../../components/Scoreboard';

const Home: React.FC = () => {
  return(
    <>
      <Header />
      <main>
            <div className="fundo">
                <div></div>
            </div>
            <div className="fundo-footer">
                <div></div>
            </div>
            <section>
                <a style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '32px', textAlign: 'center'}}>Click na abreviação dos times para marcar um gol</a>
                <Scoreboard />
            </section>
        </main>
    </>
  )
}
export default Home;
