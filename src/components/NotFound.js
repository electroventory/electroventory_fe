import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';


function NotFound() {
    const history = useHistory();

    return (
        <>
            <span>The resource you're looking for was not found!</span>
            <Button onClick={history.goBack}>Go back</Button>
        </>
    )
}

export default NotFound;