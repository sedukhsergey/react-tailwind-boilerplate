import React, { ReactNode } from 'react';
import styles from './Button.styles';
import { useStyles } from '../../hooks';

interface Props {
    handleClick: () => void;
    children: ReactNode;
    looks?: string;
    isDisabled?: boolean;
    customStyles?: any;
}

const Button: React.FC<Props> = ({
    handleClick,
    looks = '',
    children,
    isDisabled,
    customStyles,
}) => {
    const [classNames] = useStyles({ looks, styles });
    return (
        <button onClick={handleClick} disabled={isDisabled} className={classNames} style={customStyles}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    isDisabled: false,
    looks: '',
    customStyles: {},
};

export default Button;
