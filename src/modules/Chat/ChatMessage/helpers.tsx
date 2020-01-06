import React, { useMemo } from 'react';
import { Text } from '../../../components';

export const useName = ({
    isCurrentUser,
    name
}: {
    isCurrentUser: boolean;
    name: string;
}) => {
    const renderName = useMemo(() => {
        return isCurrentUser ? null : (
            <Text looks={'smallNote grayDark'}>{name}</Text>
        );
    }, [name, isCurrentUser]);
    return [renderName];
};

export const useIcon = ({
    isCurrentUser,
    src,
    alt = ''
}: {
    isCurrentUser: boolean;
    src: string;
    alt?: string;
}) => {
    const renderIcon = useMemo(() => {
        return !isCurrentUser ? (
            <img
                className={'h-8 w-8 rounded-full mr-2 mt-2'}
                src={src}
                alt={alt}
            />
        ) : null;
    }, [isCurrentUser, src, alt]);
    return [renderIcon];
};

export const useJustify = (isCurrentUser: boolean) => {
    const renderJustify = useMemo(() => {
        return isCurrentUser ? 'justify-end' : 'justify-start';
    }, [isCurrentUser]);
    return [renderJustify];
};
