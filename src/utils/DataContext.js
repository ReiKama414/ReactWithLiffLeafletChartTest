import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState(null);

    const updateData = (data) => {
        setSharedData(data);
    };

    return (
        <DataContext.Provider value={{ sharedData, updateData }}>
            {children}
        </DataContext.Provider>
    );
};
