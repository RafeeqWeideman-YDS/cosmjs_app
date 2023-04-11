const axios = require('axios');

const API_BASE_URL = 'https://impacthub.ixo.world';

const api = axios.create({
    baseURL: `${API_BASE_URL}/rest/cosmos/gov/v1beta1`,
});

export const getProposals = async () => {
    try {
        const response = await api.get('/proposals');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
