import React, {useEffect} from 'react';
import './App.css';
import GroupList from './components/groupList';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function App() {


  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <GroupList />
    </Container>
  );
}

export default App;
