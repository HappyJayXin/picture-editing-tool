import { useRef, useEffect, useCallback } from 'react';
import domtoimage from 'dom-to-image';

import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { selectImage, setIsSave, selectIsSave } from 'redux/slices/images';

const Editor = () => {
  const imgRef = useRef(null);
  const dispatch = useAppDispatch();

  const image = useAppSelector(selectImage);
  const isSave = useAppSelector(selectIsSave);

  const handleDownload = useCallback((callback) => {
    domtoimage
      .toPng(imgRef?.current)
      .then(function (dataUrl: string) {
        let link = document.createElement('a');
        link.download = image.file.name;
        link.href = dataUrl;
        link.click();
        callback();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
        callback();
      });
  }, [imgRef, image]);

  useEffect(() => {
    if (isSave) {
      handleDownload(() => {
        dispatch(setIsSave(false));
      });
    }
  }, [isSave]);

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {image && (
        <div ref={imgRef} className="w-12/12 sm:w-3/12 my-2 relative">
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
