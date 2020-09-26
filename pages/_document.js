import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel='icon' href='/favicon.ico' />
                    <link rel='preload' href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap' rel='stylesheet' />
                    <meta charSet="utf-8" />
                    <meta name={'description'} content={'Filter all spacex launches in one go! '} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
