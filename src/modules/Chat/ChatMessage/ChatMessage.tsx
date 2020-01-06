import React, { ReactNode } from 'react';
import { Card, Text } from '../../../components';
import { useName, useIcon, useJustify } from './helpers';

interface Props {
    children: ReactNode;
    src: string;
    name: string;
    alt?: string;
    isCurrentUser: boolean;
}

const ChatMessage: React.FC<Props> = ({
    children,
    src,
    alt,
    isCurrentUser,
    name
}) => {
    const [renderJustify] = useJustify(isCurrentUser);
    const [renderIcon] = useIcon({ isCurrentUser, src, alt });
    const [renderName] = useName({ isCurrentUser, name });
    // const renderName = useMemo(() => {
    //     return isCurrentUser ? (
    //         null
    //     ) : (
    //         <Text looks={'smallNote grayDark'}>{name}</Text>
    //     )
    // },[name, isCurrentUser])
    return (
        <div className={`flex ${renderJustify}`}>
            <div>
                {renderName}
                <div className={'flex'}>
                    {renderIcon}
                    <Card
                        looks={`${
                            isCurrentUser
                                ? 'roundedRightBottom'
                                : 'roundedLeftTop'
                        }`}
                    >
                        <Text looks={'breakAll'}>{children}</Text>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ChatMessage);
