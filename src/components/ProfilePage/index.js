import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  EditButton,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Matheus Martins</h1>
        <h2>@matheus_martins</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasilia-DF
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 17 de junho de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>614</strong> <span>seguidores</span>
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;
