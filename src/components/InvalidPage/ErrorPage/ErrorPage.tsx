import './ErrorPage.scss';


function ErrorPage() {

    return (

        <section className="error-page-wrapper" onClick={() => window.history.back()}>
            <h2 className='error-header'>
                Ungültige Seite
            </h2>
            <p>Klicke auf diese Seite, um zurück zu gehen.</p>
        </section>

    );

}

export default ErrorPage;