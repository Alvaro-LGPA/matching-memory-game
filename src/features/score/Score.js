import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';

export const Score = () => {
  // Add selected data variable below
  

  return (
    // implement selected data inside <div>
    <div className="score-container">Matched: 0</div>
  );
};