import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                "x-user-agent": "desktop",
                "x-proxy-location": "US",
                "x-rapidapi-host": "google-search3.p.rapidapi.com",
                "x-rapidapi-key":
                    "290dc5d251msh9256771c29f1735p1b278ejsna6a427f07e04",
            },
        });

        const data = await response.json();

        console.log(data);
        setResults(data);
        setIsLoading(false);
    };
    return (
        <ResultContext.Provider
            value={{
                getResults,
                results,
                searchTerm,
                setSearchTerm,
                isLoading,
            }}
        >
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
