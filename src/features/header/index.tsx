import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import Button from 'components/Button';

const Header = () => {
  const [images, setImages] = useState([]);

  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <nav className="w-full bg-white py-2 md:py-4 border-b">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-indigo-600">Picture Editing Tool</h1>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
            {({ onImageUpload }) => (
              <Button border onClick={onImageUpload}>
                上傳照片
              </Button>
            )}
          </ImageUploading>
        </div>
      </div>
    </nav>
  );
};

export default Header;
