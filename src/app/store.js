import { configureStore } from '@reduxjs/toolkit';

import { boardReducer } from '../features/board/boardSlice.js';


export const store = configureStore({reducer: boardReducer});