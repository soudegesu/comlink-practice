import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import './App.css';
import TopPage from './pages/TopPage';
// @ts-ignore
import SampleWorker from 'comlink-loader!./worker/sample.worker';
import { transfer } from 'comlink';

const App = () => {
  useEffect(() => {
    (async () => {
      const worker = new SampleWorker();
      console.log(worker);
      const sample = await new worker.Sample();
      sample.init(transfer({ num: 1 }, []));
    })();
  }, []);

  return (
    <Container>
      <TopPage />
    </Container>
  );
};

export default App;
