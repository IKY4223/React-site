import React from 'react'
import { useEffect, useNavigate } from 'react';

const Main = (props) => {
    const navigate = useNavigate();
    return (
        <Main {...props} navigate={navigate} />
    )
}

export default Main