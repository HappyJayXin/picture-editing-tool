import { useRef } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectImage } from 'redux/slices/images';

const Editor = () => {
  const imgRef = useRef(null);
  const image = useAppSelector(selectImage);

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {image && (
        <div ref={imgRef} className="w-6/12 sm:w-4/12 my-2 relative">
          <img src={image['data_url']} alt="" />
          <div className="absolute bottom-1 left-1">
            <p className="text-white">PYHR</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Editor;
