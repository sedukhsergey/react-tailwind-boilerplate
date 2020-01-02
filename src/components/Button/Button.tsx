import React, { ReactNode } from 'react';
import styles from './Button.styles';
import { useStyles } from '../../hooks';

interface Props {
    handleClick: () => void;
    children: ReactNode;
    looks?: string;
    isDisabled?: boolean;
    styles?: any;
}

const Button: React.FC<Props> = ({
    handleClick,
    looks = '',
    children,
    isDisabled,
    styles,
}) => {
    const [classNames] = useStyles({ looks, styles });
    return (
        <button onClick={handleClick} disabled={isDisabled} className={`${styles} ${classNames}`} style={styles}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    isDisabled: false,
    looks: '',
    styles: {},
};

export default Button;
