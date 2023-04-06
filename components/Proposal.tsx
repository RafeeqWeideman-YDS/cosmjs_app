import React, { useEffect, useState } from 'react'
import { Proposal } from '@ixo/impactxclient-sdk/types/codegen/cosmos/gov/v1beta1/gov';
import axios from 'axios';

const url = 'https://impacthub.ixo.world/rest/cosmos/gov/v1beta1/proposals?pagination.limit=10&proposal_status=2'

const Test = () => {
    const [proposals, setProposals] = useState<Proposal[]>([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProposals(response.data.proposals)
                console.log(response.data);
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>Proposals</h1>
            {proposals.map((proposal: Proposal) => (
                <div key={proposal.proposalId} style={{ height: '20rem', width: '25rem', backgroundColor: 'crimson', borderRadius: '0.5rem', padding: 5, margin: '3rem' }} >
                    <p>{proposal.proposal_id}</p>
                    <h2>{proposal.content.title}</h2>
                    <p>{proposal.status}</p>
                    <p>{proposal.content.description}</p>
                </div>
            ))}

        </div>
    )
}

export default Test
