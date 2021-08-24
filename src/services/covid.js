import axios from 'axios';

const getDataVirusCotona = async () => {
    const url = `https://api.covid19api.com/summary`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;
}

export const apiVirus = {
    getDataVirusCotona
}