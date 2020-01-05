import React, { ReactNode } from 'react';
import styles from './H2.styles';
import { useStyles } from '../../hooks';
import { Styles } from '../../constants';

interface Props extends Styles {
    children: ReactNode;
}
const H2: React.FC<Props> = ({ looks = '', customStyles, children }) => {
    const [classNames] = useStyles({looks, styles});
    return <h2 className={classNames} style={customStyles}>{children}</h2>;
};

H2.defaultProps = {
    looks: 'default',
    customStyles: {}
};

export default React.memo(H2);
