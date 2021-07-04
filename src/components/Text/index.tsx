import { ReactChild, CSSProperties  } from 'react';
import classnames from 'classnames';
import * as styles from './styles';

type Props = {
	children: ReactChild;
	className?: string;
	style?: CSSProperties;
}

const Text = ({ children, className, style }: Props) => {
  return (
    <div style={style} className={classnames(styles.text, className)}>
      {children}
    </div>
  );
};

export default Text;
