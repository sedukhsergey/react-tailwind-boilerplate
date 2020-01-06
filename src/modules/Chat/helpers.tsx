import React, { useCallback, useMemo } from 'react';
import BlueIcon from '../../images/react.svg';
import TypingIcon from '../../images/typing.svg';
import { Text } from '../../components';

export const useCurrentIcon = (userId: string) => {
    const renderCurrentIcon = useCallback(
        (id: string) => {
            return id !== userId ? BlueIcon : '';
        },
        [userId]
    );
    return [renderCurrentIcon];
};
export const useRenderPlaceholder = (typingStatus: string) => {
    const placeholderStatus = useMemo(() => {
        return typingStatus
            ? `${typingStatus} is typing...`
            : 'Your message...';
    }, [typingStatus]);
    return [placeholderStatus];
};
export const useRenderTypingStatus = (typingStatus: string) => {
    const renderTypingStatus = useMemo(() => {
        return typingStatus ? (
            <div className={'flex items-center ml-2 mb-2'}>
                <img
                    src={TypingIcon}
                    alt="user typing"
                    className={'w-4 h-4 mr-4'}
                />
                <Text looks={'smallNote'}>{typingStatus} is typing...</Text>
            </div>
        ) : null;
    }, [typingStatus]);
    return [renderTypingStatus];
};
