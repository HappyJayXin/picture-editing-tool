import { forwardRef } from 'react';
import { ImageType } from 'react-images-uploading';
import { MdCheckCircle } from 'react-icons/md';
import Text from 'components/Text';

type Props = {
  image: ImageType;
};

// Product: 奇蹟修護精華
const Product02 = forwardRef<HTMLDivElement, Props>(({ image }, ref) => {
  const checkTxt = ['修復受損', '修復乾燥', '加強髮絲'];

  return (
    <div ref={ref} className="border-8 border-chinook">
      <img src={image['data_url']} />

      <section className="absolute left-5 top-5 h-96 w-96">
        <div className="rounded-full h-full w-full flex items-center justify-center bg-white bg-opacity-60">
          <div className="text-center text-arapawa">
            <Text className="font-bold text-3xl">台灣製造 品質保證</Text>
            <Text className="font-black text-6xl leading-normal">
              修護受損髮
            </Text>
            <Text className="font-black text-6xl">強化髮絲</Text>
          </div>
        </div>
      </section>

      <section className="absolute bottom-8 left-5 h-1/4 w-96">
        <div className="flex flex-col justify-center absolute left-1/2 top-0 transform -translate-x-1/2">
          {checkTxt.map((txt) => (
            <label className="inline-flex items-center mb-3 relative">
              <MdCheckCircle className="text-4xl text-arapawa z-10" />
              <Text
                as="span"
                className="ml-2 font-medium text-3xl text-arapawa z-10">
                {txt}
              </Text>
              <div className="absolute -bottom-1 left-2 w-full h-2/3 z-auto bg-white bg-opacity-80 rounded-2xl" />
            </label>
          ))}
        </div>
      </section>
    </div>
  );
});

export default Product02;
