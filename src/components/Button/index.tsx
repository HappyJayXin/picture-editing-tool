import { ReactChild } from 'react';
import * as styles from './styles';

type Props = {
  children: ReactChild;
  border?: boolean;
  active?: boolean;
  onClick?: () => void;
  href?: string;
};

const Button = ({ border = false, active = false, children, onClick, href }: Props) => (
  <>
    {href ? (
      <a href="#" className={styles.button({ border, active })}>
        {children}
      </a>
    ) : (
      <button onClick={onClick} className={styles.button({ border, active })} type="button">
        {children}
      </button>
    )}
  </>
);

export default Button;
