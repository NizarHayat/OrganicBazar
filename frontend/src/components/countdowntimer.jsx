import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endTime }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = endTime - now;

    if (difference <= 0) {
      // Sale has ended
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    let timer;

    const updateTimer = () => {
      setTimeRemaining(calculateTimeRemaining());
      timer = setTimeout(updateTimer, 1000);
    };

    updateTimer(); // Initial call

    return () => clearTimeout(timer);
  }, [endTime]); // Add endTime as a dependency to recalculate on endTime change

  return (
    <div style={styles.countdownTimer}>
      <div style={styles.timerUnit}>
        <span style={styles.timerValue}>{timeRemaining.days}</span>
        <span style={styles.timerLabel}>Days</span>
      </div>
      <div style={styles.timerUnit}>
        <span style={styles.timerValue}>{timeRemaining.hours}</span>
        <span style={styles.timerLabel}>Hours</span>
      </div>
      <div style={styles.timerUnit}>
        <span style={styles.timerValue}>{timeRemaining.minutes}</span>
        <span style={styles.timerLabel}>Minutes</span>
      </div>
      <div style={styles.timerUnit}>
        <span style={styles.timerValue}>{timeRemaining.seconds}</span>
        <span style={styles.timerLabel}>Seconds</span>
      </div>
    </div>
  );
};

const styles = {
  countdownTimer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '2em', // Medium font size
    color: 'purple', // Changed text color
  },
  timerUnit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 15px', // Adjusted margin
  },
  timerValue: {
    fontSize: '2em', // Medium font size
    fontWeight: 'bold',
    color: 'orange',
    // Add animation for a creative touch
    animation: 'bounce 1s infinite',
  },
  timerLabel: {
    fontSize: '0.8em',
    color: '#ccc',
  },
  // Keyframe animation for bounce effect
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-10px)',
    },
    '60%': {
      transform: 'translateY(-5px)',
    },
  },
};

export default CountdownTimer;
