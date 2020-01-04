import React, { ReactNode } from 'react';
import styles from './Text.styles';
import { useStyles } from '../../hooks';
import { Styles } from '../../constants';

interface Props extends Styles {
    children: ReactNode;
}
const Text: React.FC<Props> = ({ looks = '', customStyles, children }) => {
    const [classNames] = useStyles({looks, styles});
    return <p className={classNames} style={customStyles}>{children}</p>;
};

Text.defaultProps = {
    looks: 'default',
    customStyles: {}
};

export default Text;
