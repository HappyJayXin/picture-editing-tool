import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageType} from 'react-images-uploading';
import {AppState} from '../store';

interface ImagesState {
  source: ImageType | null;
  isSave: boolean;
}

const initialState: ImagesState = {
  source: null,
  isSave: false,
};

export const userSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setSource: (state, action: PayloadAction<ImageType>) => {
      state.source = action.payload;
    },
    setIsSave: (state, action: PayloadAction<boolean>) => {
      state.isSave = action.payload;
    },
  },
});

export const {setSource, setIsSave} = userSlice.actions;

export const selectImage = (state: AppState) => state.images.source;
export const selectIsSave = (state: AppState) => state.images.isSave;

export default userSlice.reducer;
