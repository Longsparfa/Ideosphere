import React from 'react';
import { Navbar, Footer } from '../src/components';

import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
    <>
      <Navbar />
        <div id='error-page'>
            <h1>Oopsss!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
      <Footer />
    </>
    );
}

export default ErrorPage;
