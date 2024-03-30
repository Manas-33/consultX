import { createClient } from 'urql';

import React from 'react'

const index = () => {

    const createRequest = async () => {
        const QueryURL = "https://api.studio.thegraph.com/query/69106/consultxgrpah/0.0.1";

        const Query = `{expertRequesteds {
                ExpertAddress
                ExpertName
                ExpertemailAddress
                RequestNumber
                coursefees
                expertise
                id
              }}`

        const Client = createClient({
            url: QueryURL
        })

        const data = await Client.query(Query).toPromise();
        console.log(data.data)
    }

    createRequest();
    
    return (
        <div>index</div>
    )
}

export default index