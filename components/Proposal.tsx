import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://impacthub.ixo.world';

const api = axios.create({
    baseURL: `${API_BASE_URL}/rest/cosmos/gov/v1beta1`,
});

const ProposalList = () => {
    const [proposals, setProposals] = useState<any[]>([]);

    useEffect(() => {
        const fetchProposals = async () => {
            try {
                const response = await api.get('/proposals');
                setProposals(response.data.proposals);
                console.log(response.data.proposals)
            } catch (error) {
                console.error(error);
            }
        };

        fetchProposals();
    }, []);

    return (
        <div>
            <h1>Proposal List</h1>
            <ul>
                {proposals && proposals.length > 0 ? (
                    <div>
                        {proposals.map((proposal) => (
                            <div
                                key={proposal.proposal_id}
                                style={{
                                    height: '40rem',
                                    width: '300px',
                                    margin: '70px',
                                    backgroundColor: 'crimson',
                                    padding: '10px',
                                    display: 'flex-box',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <h1>{proposal.content.title}</h1>
                                <p>{proposal.content.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No proposals found.</p>
                )}
            </ul>
        </div>
    );
};

export default ProposalList;
