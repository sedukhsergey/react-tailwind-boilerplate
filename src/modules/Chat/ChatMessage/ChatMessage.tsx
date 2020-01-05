import React, { ReactNode, useMemo } from 'react';
import { Card, Text } from "../../../components";
interface Props {
    children: ReactNode;
    src: string;
    alt?: string;
    isUser: boolean;
}

const ChatMessage: React.FC<Props> = ({
    children,
    src,
    alt,
    isUser
}) => {
    const renderCurrentJustify = useMemo(() => {
        return isUser ? 'justify-end' : 'justify-start';
    },[isUser])
    const renderIcon = useMemo(() => {
        return !isUser ? <img className={'h-8 w-8 rounded-full mr-2'} src={src} alt={alt} /> : null
    },[isUser])
    return (
        <div className={`flex ${renderCurrentJustify}`}>
            {renderIcon}
            <Card looks={`${isUser ? 'roundedRightBottom' : 'roundedLeftTop'}`}>
                <Text looks={'breakAll'}>
                    {children}
                </Text>
            </Card>
        </div>
    );
};

export default React.memo(ChatMessage);
