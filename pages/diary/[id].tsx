import React from 'react';
import Head from "next/head";

import { useRouter } from "next/router";

const DiaryDetail = () => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>다이어리 페이지 -  {router.query.id}</title>
            </Head>
            <h1>다이어리 페이지 - {router.query.id}</h1>
        </div>
    );
};

export default DiaryDetail;