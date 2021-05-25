import gql from "graphql-tag";


export const rocketQuery = gql`
{
  launchesPast(limit: 100) {
    launch_date_local
    rocket {
      second_stage {
        payloads {
          payload_mass_kg
        }
      }
    }
  }
}
`;