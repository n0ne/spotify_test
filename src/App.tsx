import React, { FC } from 'react';
import Container from '@mui/material/Container';
import useGetToken from './common/useGetToken';
import TrackList from './components/TracksList';
import Header from './components/Header';

const App: FC = () => {

  useGetToken()

  return (
    <Container maxWidth="lg">
      <Header />
      <TrackList />
    </Container>
  );
}

export default App;