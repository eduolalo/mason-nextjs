/**
 * Página generada automáticamente con mason-CLI
 */
import { NextPage } from "next";
import Head from 'next/head';

import styles from './{{name.pascalCase()}}.module.css';


const {{name.pascalCase()}}: NextPage = () => {


    return (
        <>
            <Head>
                <title>{{name.pascalCase()}}</title>
            </Head>
            <h1>{{name.pascalCase()}} Page</h1>
            <h2>I'm alive!</h2>
        </>
    );
}

export default {{name.pascalCase()}};