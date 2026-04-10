import './ErrorPage.scss';


function ErrorPage() {

    return (

        <section className="error-page-wrapper" onClick={() => window.history.back()}>
            <h2>Invalid Page</h2>
            <p>Click here to go back</p>
        </section>

    );

}

export default ErrorPage;