import React from 'react';
import { useQuery } from '@apollo/client';
import { signOut } from 'next-auth/client';
import { lastHundredLaunches } from '../queries';

export const PrivateGraph = () => {
  const { data, loading: dataLoading, error } = useQuery(lastHundredLaunches);

  return (
    <div>
      <button onClick={signOut}>Sign out</button>
      {dataLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {data?.launchesPast.map((launch, index) => {
        return (
          <div key={index}>
            <span>
              <b>{launch.launch_year}</b>
            </span>
            <div>
              {launch.rocket.second_stage.payloads[0].payload_mass_kg} kg
            </div>
          </div>
        );
      })}
    </div>
  );
};
