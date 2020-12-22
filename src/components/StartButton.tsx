import { Button } from '@material-ui/core';
import React, { FC } from 'react';

const StartButton: FC = () => {
  const { handleOnClick } = useStartButton();

  return (
    <Button variant="contained" color="primary" onClick={handleOnClick}>
      Start
    </Button>
  );
};

const useStartButton = () => {
  const handleOnClick = async () => {
    console.log('click');
  };

  return { handleOnClick };
};

export default StartButton;
