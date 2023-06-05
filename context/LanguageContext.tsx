import React, { ReactNode, createContext, useState } from "react";
import { languageOptions, dictionaryList } from "../constants/data";



export type LanguageProviderType = {
    userLanguage: string;
    dictionary: any;
    userLanguageChange: (selected: string) => void;
}

export const LanguageContext = createContext<LanguageProviderType>({
    userLanguage: languageOptions.en,
    dictionary: dictionaryList.en,
    userLanguageChange: () => { }
});


export function LanguageProvider({ children }: { children: ReactNode }) {
    const defaultLanguage =
        (typeof window !== "undefined" &&
            window.localStorage.getItem("mld-lang")) || "en";

    const [userLanguage, setUserLanguage] = useState<string>(defaultLanguage);

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: (selected: string) => {
            const newLanguage = languageOptions[selected] ? selected : "en";
            setUserLanguage(newLanguage);
            localStorage.setItem("mld-lang", newLanguage);
        },
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
}
