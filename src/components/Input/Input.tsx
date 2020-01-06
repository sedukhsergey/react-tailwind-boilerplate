import React, { ChangeEvent, KeyboardEvent } from 'react';
import styles from './Input.styles';
import { useStyles } from '../../hooks';
import { Styles } from '../../constants';

interface Props extends Styles {
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
    name: string;
}
const Input: React.FC<Props> = ({ looks = '', customStyles, ...rest }) => {
    const [classNames] = useStyles({looks, styles});
    return (
        <input
            className={classNames}
            style={customStyles}
            type="text"
            {...rest}
        />
    );
};

Input.defaultProps = {
    looks: 'default',
    customStyles: {},
};

export default React.memo(Input);
