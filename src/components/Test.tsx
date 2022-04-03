import React from 'react';
import axios from 'axios';

export const Test = () => {
  const send = () => {
    axios.get('/api/test');
  };
  return (
    <div onClick={send}>123</div>
  );
};
