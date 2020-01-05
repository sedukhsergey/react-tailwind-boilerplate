import React, { ReactNode, useMemo } from 'react';
import { Card, Text } from '../../../components';
interface Props {
    children: ReactNode;
    src: string;
    alt?: string;
    isCurrentUser: boolean;
}

const ChatMessage: React.FC<Props> = ({ children, src, alt, isCurrentUser }) => {
    const renderCurrentJustify = useMemo(() => {
        return isCurrentUser ? 'justify-end' : 'justify-start';
    }, [isCurrentUser]);
    const renderIcon = useMemo(() => {
        return !isCurrentUser ? (
            <img className={'h-8 w-8 rounded-full mr-2'} src={src} alt={alt} />
        ) : null;
    }, [isCurrentUser, src, alt]);
    return (
        <div className={`flex ${renderCurrentJustify}`}>
            {renderIcon}
            <Card looks={`${isCurrentUser ? 'roundedRightBottom' : 'roundedLeftTop'}`}>
                <Text looks={'breakAll'}>{children}</Text>
            </Card>
        </div>
    );
};

export default React.memo(ChatMessage);
