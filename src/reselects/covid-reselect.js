import { createSelector } from 'reselect';

const virusState = state => state.virus;

export const getLoadingVirus = createSelector(
    virusState,
    item => item.loading
);

export const getAllDataVirus = createSelector(
    virusState,
    item => item.virus
);

export const getGolbalVirus = createSelector(
    getAllDataVirus,
    item => {
        if(item.hasOwnProperty('Global')){
            return item.Global
        }
        return null
    }
)

export const getCountriesVirus = createSelector(
    getAllDataVirus,
    item => {
        if(item.hasOwnProperty('Countries')){
            return item.Countries
        }
        return null
    }
)