import constants from "./constants";

const checkParams = iterator => (iterator === 'land_success' || iterator === 'launch_success' || iterator === 'launch_year');

export const getQueryParams = () => {
    const queries = {};
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        for (const iterator of params) {
            if (iterator.length && checkParams(iterator[0])) {
                queries[iterator[0]] = iterator[1];
            }
        }
    }
    return queries;
};

export const appendQueryParams = (query = {}) => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        Object.keys(query).forEach(key => {
            if (params.has(key)) {
                query[key] ? params.set(key, query[key]) : params.delete(key);
            } else {
                query[key] && params.append(key, query[key]);
            }
        });
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
        return params.toString();
    }
    return null;
};


export const getSpaceXData = async (filters, URL) => {
    const filteredURL = filters ? (`${URL}?${filters}`) : (`${URL}?limit=100`);
    const response = await fetch(filteredURL);
    return response.json();
};
