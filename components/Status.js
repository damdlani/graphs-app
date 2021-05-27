import styled from "styled-components";

const StyledStatus = styled.div`
  margin: 100px;
  text-align: center;
`;

export const Status = ({error}) => {
  return (
    <StyledStatus>{error ? `Error occured: ${error.message}`: 'Loading...'}</StyledStatus>
  )
}