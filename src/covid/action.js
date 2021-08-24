export const REQUEST_DATA_VIRUS = Symbol('REQUEST_DATA_VIRUS');

export const START_GET_DATA = Symbol('START_GET_DATA');
export const GET_DATA_VIRUS_SUCCESS = Symbol('GET_DATA_VIRUS_SUCCESS');
export const GET_DATA_VIRUS_FAIL = Symbol('GET_DATA_VIRUS_FAIL');

export const requestData = () => ({
    type: REQUEST_DATA_VIRUS
});

export const startGetData = (loading) => ({
    type: START_GET_DATA,
    loading
});

export const getDataSuccess = (data) => ({
    type: GET_DATA_VIRUS_SUCCESS,
    data
});

export const getDataFail = (error) => ({
    type: GET_DATA_VIRUS_FAIL,
    error
});

