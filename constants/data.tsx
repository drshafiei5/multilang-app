import fa from "../data/fa.json";
import en from "../data/en.json";

export type LangObject = { [key: string]: string };

export const dictionaryList: any = { en, fa };
export const languageOptions: LangObject = {
    en: "English",
    fa: "فارسی",
};
