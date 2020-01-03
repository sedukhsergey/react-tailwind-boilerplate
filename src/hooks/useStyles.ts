import { useState, useEffect } from 'react';

type Props = {
    styles: any;
    looks: string;
};

const useStyles = ({ styles, looks }: Props) => {
    const [classNames, setClassNames] = useState('');
    useEffect(() => {
        if (looks.trim().length) {
            const customStyles = looks.trim().split(' ') || [];
            const classNamesList = customStyles
                .map(look => styles[look])
                .join(' ');
            setClassNames(classNamesList);
        }
    }, [styles, looks]);
    return [classNames];
};

export default useStyles;
