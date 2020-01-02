import React, { useState } from 'react';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white shadow-lg mx-4 mb-4 p-4">
            <h1
                className="
                md:ml-4
                md:text-left
                font-bold
                text-center
            "
            >
                Some H1 text
            </h1>
            <div className="">
                <h2 className="font-bold items-center flex justify-center">
                    Article
                </h2>
                {[1, 2].map((item, index) => (
                    <p key={index} className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci atque consectetur dicta doloremque
                        dolores, enim fugiat itaque iusto nihil numquam officia
                        omnis praesentium reiciendis suscipit tenetur ullam vel
                        vero voluptas.
                    </p>
                ))}
                <div className="flex flex-col">
                    <h2
                        className="
                        md:text-base
                        lg:text-lg
                        flex
                        w-full
                        justify-center
                        text-center font-bold text-sm
                    "
                    >
                        First List
                    </h2>
                    <div className="flex justify-between px-4">
                        <span onClick={() => setIsOpen(state => !state)}>
                            open
                        </span>
                        {isOpen ? (
                            <>
                                <ul>
                                    {['first', 'first'].map((i, key) => {
                                        return <li key={key}>{i}</li>;
                                    })}
                                </ul>
                                <ul>
                                    {['second', 'second'].map((i, key) => {
                                        return <li key={key}>{i}</li>;
                                    })}
                                </ul>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
