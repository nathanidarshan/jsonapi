import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';

function Photos() {

    let [val, setval] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setval(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])

    return (
        <>

            {/* <Container> */}
                <Row>
                    {
                        val.map((ele, ind) => {
                            return (
                                <>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ele.url} />
                                        <Card.Body>
                                            <Card.Title>Title</Card.Title>
                                            <Card.Text>
                                                {ele.id} {ele.title}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })
                    }
                </Row>

        </>
    )
}
export default Photos;