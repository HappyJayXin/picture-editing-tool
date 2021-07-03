import { useRef } from 'react';
import domtoimage from 'dom-to-image';
import Button from '../../components/Button';

const ImageDownload = () => {
  const imgRef = useRef(null);

  const onClick = () => {
    domtoimage
      .toPng(imgRef.current)
      .then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'pthr.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <div className="flex flex-wrap justify-center items-center	 flex-col">
      <div ref={imgRef} className="w-6/12 sm:w-4/12 my-2 relative">
        <img src="img01.png" alt="" />
        <div className="absolute bottom-1 left-1">
          <p className="text-white">PYHR</p>
        </div>
      </div>

      <div>
        <Button onClick={onClick}>Download</Button>
      </div>
    </div>
  );
};

export default ImageDownload;
