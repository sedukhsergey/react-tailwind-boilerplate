import React, { useState } from 'react';
import { Button, Card, Container, Input } from 'semantic-ui-react';
import { Form, Formik } from 'formik';
import styles from './styles.module.css';
import Router from '../../routes/RedirectRouter';
import { localStorage } from '../../utils';

const Login = () => {
    return (
        <div className={styles.container}>
            <Card centered>
                <Card.Content>
                    <Card.Header as={'h2'} textAlign={'center'}>
                        Login Form
                    </Card.Header>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values',values)
                            localStorage.setItem('role', 'member');
                            localStorage.setItem('authToken', 'some auth token')
                            Router.goToMain();
                            setSubmitting(false);
                        }}
                    >
                        {({ handleChange, handleSubmit, values, errors }) => {
                            return (
                                <Form className={styles.form}>
                                        <Input
                                            name={'email'}
                                            type={'email'}
                                            onChange={handleChange}
                                            className={styles.mb4}
                                        />
                                        <Input
                                            name={'password'}
                                            type={'password'}
                                            onChange={handleChange}
                                            className={styles.mb4}
                                        />
                                    <Button primary>Submit</Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Login;
