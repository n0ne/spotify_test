import * as React from 'react';
import Container from '@mui/material/Container';
import useGetToken from './common/useGetToken';
import TrackList from './components/TracksList';
import Header from './components/Header';


export default function App() {

  useGetToken()

  return (
    <Container maxWidth="lg">
      <Header />
      <TrackList />
    </Container>
  );
}
