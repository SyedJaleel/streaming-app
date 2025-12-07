import Head from 'next/head';

const MyHead = () => {
    return (
        <Head>
            <title>Streaming Service Dashboard</title>
            <meta name="description" content="A simplified dashboard for streaming service movies." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default MyHead;