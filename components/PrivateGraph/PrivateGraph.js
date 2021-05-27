import React from 'react';
import { useQuery } from '@apollo/client';
import { signOut } from 'next-auth/client';
import { lastHundredLaunches } from '../../queries';
import { Button, Wrapper } from '../common';
import { Status } from "../Status";


export const PrivateGraph = () => {
  const { data, loading: dataLoading, error } = useQuery(lastHundredLaunches);

  return (
    <Wrapper>
      <Button onClick={signOut}>Sign out</Button>
      {dataLoading && <Status />}
      {error && <Status error={error} />}
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
    </Wrapper>
  );
};
