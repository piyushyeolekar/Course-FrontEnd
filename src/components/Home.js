import React, { useEffect } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
    useEffect(() => {
        document.title="Home";
    },[]);

    return (
        <div>
            <Jumbotron>
                <h1>Piyush Yeolekar</h1>
                <p>
                    This is developed by Piyush Yeolekar for learning purpose.it's backend is on springboot and frontend is reactjs
                </p>
                <Container>
                    <Button outline color="info">Start Using</Button>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;