import { useRef, useEffect, useCallback } from 'react';
import domtoimage from 'dom-to-image';

import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { selectImage, setIsSave, selectIsSave } from 'redux/slices/images';

import Product from '../product';

const Work = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const image = useAppSelector(selectImage);
  const isSave = useAppSelector(selectIsSave);

  const handleDownload = useCallback(
    (callback) => {
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
    },
    [imgRef, image]
  );

  useEffect(() => {
    if (isSave) {
      handleDownload(() => {
        dispatch(setIsSave(false));
      });
    }
  }, [isSave]);

  return (
    <section className="flex items-center justify-center w-full">
      {image && (
        <div className="w-7/12 xl:w-5/12 2xl:w-4/12 relative">
          <Product ref={imgRef} image={image} />
        </div>
      )}
    </section>
  );
};

export default Work;
