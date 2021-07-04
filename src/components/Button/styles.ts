import classnames from 'classnames';

const buttonStyle = classnames(
	'p-2',
	'lg:px-4',
	'md:mx-2',
	'text-center',
	'border',
	'border-transparent',
	'rounded',
	'transition-colors',
	'duration-300'
);

const defaultStyle = classnames('text-indigo-600', 'hover:bg-indigo-100',
	'hover:text-indigo-700')

const activeStyle = classnames('text-white', 'bg-indigo-600')

const borderStyle = classnames('border-solid', 'border-indigo-600', 'text-indigo-600','hover:bg-indigo-600', 'hover:text-white', 'mt-1', 'md:mt-0', 'md:ml-1')

export const button = ({ border, active }) => classnames(buttonStyle, {
	[defaultStyle]: !border && !active,
	[activeStyle]: active,
	[borderStyle]: border,
});
