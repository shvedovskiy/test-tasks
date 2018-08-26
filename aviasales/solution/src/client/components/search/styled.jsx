import styled from 'styled-components';


export const MainContainer = styled.div`
  max-width: 1000px;
  min-width: 320px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  grid-gap: 20px;
  padding: 0 35px 100px;

  @media screen and (max-width: 870px) {
    grid-template-columns: auto;
    grid-template-areas: "settings"
                         "tickets";
  }

  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (max-width: 340px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
