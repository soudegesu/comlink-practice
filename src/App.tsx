import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import './App.css';
import TopPage from './pages/TopPage';
// @ts-ignore
import SampleWorker from 'comlink-loader!./worker/sample.worker';

const App = () => {
  useEffect(() => {
    (async () => {
      const worker = new SampleWorker();
      console.log(worker);
      const sample = await new worker.Sample();
      sample.init();
    })();
  }, []);

  return (
    <Container>
      <TopPage />
    </Container>
  );
};

export default App;
