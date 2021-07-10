import { forwardRef } from 'react';
import { ImageType } from 'react-images-uploading';

type Props = {
  image: ImageType;
};

const Product = forwardRef<HTMLDivElement, Props>(({ image }, ref) => {
  return (
    <div ref={ref} className="border-8">
      <img src={image['data_url']} />
    </div>
  );
});

export default Product;
