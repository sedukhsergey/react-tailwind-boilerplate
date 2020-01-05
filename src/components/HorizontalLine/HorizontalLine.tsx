import React from "react";
import styles from './HorizontalLine.styles'
import { Styles } from "../../constants";
import { useStyles } from "../../hooks";

interface Props extends Styles {}
const HorizontalLine: React.FC<Props> = ({
    looks = '',
    customStyles,
}) => {
    const [classNames] = useStyles({looks, styles});
    return (
        <hr className={classNames} style={customStyles}/>
    )
}

HorizontalLine.defaultProps = {
    customStyles: {},
    looks: 'default',
}

export default React.memo(HorizontalLine);
