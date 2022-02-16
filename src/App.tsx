import { useQuery } from '@apollo/client';
import React from 'react';
import './App.scss';
import Pipe from './components/Pipe/Pipe';
import ORGANIZATION from './graphql/organization';
import { IPipe } from './interfaces/pipe.interface';
import { ORGANIZATION_ID } from './utils/constants';

function App() {
  const { data } = useQuery(ORGANIZATION, {
    variables: {
      id: ORGANIZATION_ID,
    },
  });

  const pipes = data?.organization?.pipes
    .map((pipe: IPipe) => pipe)
    .sort((a: IPipe, b: IPipe) => a.name.trim().localeCompare(b.name.trim(), 'en'));

  return (
    <div className="app">
      <header className="app__header">
        <h2 className="app__header__title">Your pipes</h2>
        <p className="app__header__subtitle">
          Here are all your processes <a href="#fake-link">learn more</a>.
        </p>
      </header>
      <div className="app__organization-pipes">
        {pipes?.map((pipe: IPipe) => (
          <Pipe {...pipe} key={pipe?.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
