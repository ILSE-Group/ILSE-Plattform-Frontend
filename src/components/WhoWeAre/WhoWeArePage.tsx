import Header from '../Header/Header';


function WhoWeArePage() {

    return (
        <div>
            <Header />
            
            <main style={{ padding: "20px"}} >
                <h1>Über uns</h1>

                <p>
                    Wir sind fünf Informatikstudenten und entwickelten diese Lernplattform im Rahmen eines Studienprojekts. 
                    Unser Ziel ist es, Wissen über Gefahren im Internet verständlich und ein bisschen spannender zu vermitteln.
                </p>

                <p>
                    Damit das Lernen nicht trocken wird, begleitet unsern Otter Ilse euch durch die verschiedenen Themen. 
                    Schritt für Schritt zeigt er typische Risiken im Netz und hilft dabei, sie besser zu verstehen.
                </p>
                    
                <p>
                    Die Plattform richtet sich vorallem an Schülerinnen und Schüler der 7. Klasse, ist aber auch für andere Jahrgangsstufen und Lehrer sowie andere Interessierte gedacht. 
                    Deshalb erklären wir die Inhalte möglichst einfach und klar. 
                </p>

                <p>
                    Uns ist wichtig, dass man nicht nur liest, sondern auch aktiv mitmacht. 
                    Durch diese kleinen Aufgaben könnt ihr euer Wissen erweitern und auch direkt anwenden.
                </p>

                <p>
                    So wollen wir dazu beitragen, dass der Umgang mit dem Internet sicherer und bewusster wird.
                </p>


            </main>

        </div>
    );

}

export default WhoWeArePage;