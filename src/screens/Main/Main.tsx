import React from 'react';
import { RedirectRouter } from "../../routes";
import {
    Card,
    Container,
    Grid,
    Image,
} from "semantic-ui-react";

const Main = () => (
    <Container>
        <a onClick={() => RedirectRouter.goToDashboard()}>Go to dashboard</a>
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
                <Grid.Column width={6}>
                    <p>some text some textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textv</p>
                </Grid.Column>
                <Grid.Column width={6}>
                    <p>some another text some another textsome another textsome another textsome another textsome another textsome another textsome another textsome another textsome another text</p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid celled>
            <Grid.Row columns={2}>
                <Grid.Column width={4}>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size={'tiny'} floated={'right'}/>
                    </Grid.Column>
                    <Grid.Column>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur dicta dolore eligendi eum iste nam necessitatibus, nihil nisi quae! Aperiam eaque fugit incidunt minima molestiae saepe ut veritatis voluptate.
                    </Grid.Column>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column style={{
                                justifyContent: 'center',
                                display: "flex"
                            }}>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size={'tiny'}/>
                            </Grid.Column>
                            <Grid.Column style={{
                                justifyContent: 'center',
                                display: "flex"
                            }}>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size={'tiny'}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column width={16}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum ducimus eveniet inventore itaque minima odit officiis perspiciatis quia repellendus. Aspernatur assumenda consequatur explicabo natus placeat provident quae saepe sit.
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Card style={{padding: '8px', width: '60%'}}>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={6}>
                        <Grid.Row columns={3}>
                            <Grid.Column floated={'left'} className={'mr-8'}>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size={'mini'}/>
                            </Grid.Column>
                            <Grid.Column floated={'left'} className={'mr-8'}>
                                <span>name</span>
                            </Grid.Column>
                            <Grid.Column floated={'left'}>
                                <span>age</span>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={10} className={'flex items-center'}>some message</Grid.Column>
                </Grid.Row>
            </Grid>
        </Card>
    </Container>
);

export default Main;
