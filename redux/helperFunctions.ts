export interface RootActionReturnPropTypes {type: string, payload :any};

export const action = (type: string, payload?: any) : RootActionReturnPropTypes => {
    return {
        type,
        payload
    };
};

export const getActionType = (action: any): string => {
    return action().type;
};

// Mock API call function
export const fetchDataFromAPI = async (url:string) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
};
  