import React from 'react';
import StickBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <>
                <FollowSuggestion
                  name="Luiz Bataneiro"
                  nickname="@luizbatanero"
                />
                <FollowSuggestion name="Luck Morales" nickname="@lukemorales" />
                <FollowSuggestion
                  name="Camila Magalhães"
                  nickname="@camilamgl"
                />
              </>,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
}

export default SideBar;
