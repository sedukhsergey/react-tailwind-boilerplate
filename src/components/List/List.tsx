import React, { ReactNode } from 'react';
import { Styles } from '../../constants';
import { useStyles } from '../../hooks';
import styles from './List.styles';

interface Props extends Styles {
    children: ReactNode;
}
const List: React.FC<Props> = ({ children, looks = '', customStyles }) => {
    const [classNames] = useStyles({ looks, styles });
    return (
        <ul className={classNames} style={customStyles}>
            {children}
        </ul>
    );
};

List.defaultProps = {
    looks: 'default',
    customStyles: {}
};

export default React.memo(List, (prevProps: Props, nextProps: Props) => {
    if (prevProps.children === nextProps.children) {
        return true;
    }
    return false;
});
