import React, { useState } from 'react';
import { Container, Grid, Divider, Input, Select, Accordion } from 'semantic-ui-react';

const optionsList = [
    {value: '', text: ''},
    { value: 1, text: 'Bob' },
    { value: 2, text: 'Slag'},
];

const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    console.log('activeIndex',activeIndex)
    const handleClick = (_: any, title: any) => {
        console.log('title',title)
        const {index} = title;
        setActiveIndex(state => index === state ? -1 : index);
    };
    return (
        <Container>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={8} textAlign={'center'}>
                        <Input placeholder={'name'} />
                    </Grid.Column>
                    <Grid.Column width={8} textAlign={'center'}>
                        <Input placeholder={'age'} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Accordion>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={handleClick}
                            >

                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur dicta, dolores illum iure laborum laudantium minus neque perspiciatis voluptate. Cum dolorem iusto, mollitia necessitatibus non quas sit suscipit voluptate?
                            </Accordion.Content>
                        </Accordion>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Dashboard;
