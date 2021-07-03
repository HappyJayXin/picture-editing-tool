import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageType } from 'react-images-uploading';
import { AppState } from '../store';

interface ImagesState {
	source: ImageType | null;
}

const initialState: ImagesState = {
  source: null
};

export const userSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setSource: (state, action: PayloadAction<ImageType>) => {
      state.source = action.payload;
    },
  },
});

export const { setSource } = userSlice.actions;

export const selectImage = (state: AppState) => state.images.source

export default userSlice.reducer;
