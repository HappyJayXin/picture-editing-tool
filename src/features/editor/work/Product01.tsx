import { forwardRef } from 'react';
import { ImageType } from 'react-images-uploading';
import Text from 'components/Text';

const titleStyle = {
  textShadow: '2px 1px 0px #fff, 5px 4px 0px rgba(0,0,0,0.15)',
};

const itemStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 50px',
};

type Props = {
	image: ImageType
};

// Product: 保濕護髮 捲髮乳
const Product01 = forwardRef<HTMLDivElement, Props>(({ image }, ref) => {
  const text = ['捲髮乳', '保濕蜜'];

  return (
    <div ref={ref} className="w-12/12 sm:w-3/12 relative border-8 border-black">
      <img src={image['data_url']} alt="" />

      <div className="absolute inset-x-0 top-5 h-16 text-center">
        <Text className="text-black text-6xl" style={titleStyle}>
          天然護髮系列
        </Text>
      </div>

      <div className="absolute inset-x-0 top-24 text-center flex justify-evenly	">
        {text.map((t) => (
          <div
            className="rounded-lg border-black py-2 px-7 text-3xl bg-blue-400 text-white"
            style={itemStyle}
          >
            <Text>{t}</Text>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Product01;
