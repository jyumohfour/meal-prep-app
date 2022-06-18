import React, { useEffect } from 'react'
import { useParams } from "react-router";

function SecondList(){
    let { postSlug } = useParams();

    useEffect(() => {

    }, [postSlug]);
    return (
        <div>
            <h1>
                Second page 
            </h1>
        </div>
    );

};
export default SecondList;