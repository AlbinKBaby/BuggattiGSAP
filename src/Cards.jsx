import React from 'react'
import Card from 'react-bootstrap/Card';
import "./styles/cards.css"

function Cards() {
    return (
        <>
            <section className="cardSection">
                <Card className='card'>

                    <Card.Body>
                    
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >

                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >

                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

        </>
    )
}

export default Cards