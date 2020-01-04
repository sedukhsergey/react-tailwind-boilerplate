import React, { ReactNode } from 'react';
import styles from './Button.styles';
import { useStyles } from '../../hooks';
import { Styles } from '../../constants';

interface Props extends Styles {
    children: ReactNode;
    handleClick: () => void;
    isDisabled?: boolean;
}

const Button: React.FC<Props> = ({
    handleClick,
    looks = '',
    children,
    isDisabled,
    customStyles
}) => {
    const [classNames] = useStyles({ looks, styles });
    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
            className={classNames}
            style={customStyles}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    isDisabled: false,
    looks: '',
    customStyles: {}
};

export default Button;
