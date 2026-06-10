import { useEffect } from 'react';

import AppHeader from "../Header/Header";
import ErrorPage from "./ErrorPage/ErrorPage";


function InvalidPage() {

    useEffect(() => {
        document.title = 'ILSE - Invalid';
    }, []);

    return (
        <>
            <AppHeader />
            <ErrorPage />
        </>

    );

}

export default InvalidPage;