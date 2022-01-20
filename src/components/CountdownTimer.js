import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Material UI
import { Button } from '@mui/material';

const CountdownTimer = ({ id }) => {
  const [initialTimer, setInitialTimer] = useState(
    Math.trunc(Math.random() * (300 - 60) + 60)
  );

  useEffect(() => {
    if (initialTimer === 0) {
      return;
    } else {
      const interval = setInterval(() => {
        setInitialTimer(initialTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [initialTimer]);

  const minutes = Math.floor(initialTimer / 60);
  const min = minutes < 10 ? `0${minutes}` : minutes;

  const seconds = initialTimer % 60;
  const sec = seconds < 10 ? `0${seconds}` : seconds;

  const counter = `${min}:${sec}`;

  return (
    <>
      <Button
        variant="contained"
        size="medium"
        disabled={counter !== '00:00' ? false : true}
        sx={{
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: '#808080'
          },
          textTransform: 'none'
        }}
      >
        <Link
          to={id}
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Details
        </Link>
      </Button>
      <Button size="medium" sx={{ color: 'black', pointerEvents: 'none' }}>
        {counter}
      </Button>
    </>
  );
};

export default CountdownTimer;
