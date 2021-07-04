import { MdTextFields, MdPermMedia, MdFormatShapes } from 'react-icons/md';

const Icon = ({ Component }) => (
  <div className="flex justify-center py-4 cursor-pointer	hover:bg-gray-100">
    <Component className="text-3xl text-indigo-600" />
  </div>
);

const Tool = () => {
  return (
    <section className="w-16">
      <Icon Component={MdTextFields} />
      <Icon Component={MdPermMedia} />
      <Icon Component={MdFormatShapes} />
    </section>
  );
};

export default Tool;
