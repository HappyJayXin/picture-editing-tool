import { createElement, ReactChild, CSSProperties } from 'react';
import classnames from 'classnames';
import * as styles from './styles';

type Props = {
  children: ReactChild;
  as?: string;
  className?: string;
  style?: CSSProperties;
};

const Text = ({ children, as = 'div', className, style }: Props) => {
  return createElement(
    as,
    { style, className: classnames(styles.text, className) },
    children
  );
};

export default Text;
