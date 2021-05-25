import gql from "graphql-tag";

export const lastHundredLaunches = gql`
  query lastHundredLaunches {
    launchesPast(limit: 100) {
      launch_date_local
      launch_year
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
export const latestLaunches = gql`
  query latestLaunches {
    twenty20: launchesPast(limit: 100, find: { launch_year: "2020" }) {
      launch_date_local
      launch_year
      rocket {
        second_stage {
          payloads {
            payload_mass_kg
          }
        }
      }
    }
    twenty21: launchesPast(limit: 100, find: { launch_year: "2021" }) {
      launch_date_local
      launch_year
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
