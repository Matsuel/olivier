import React, { ChangeEvent, useContext, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Language } from "../Languages";
import ReactSwitch from "react-switch";
import './Lang.css';
import { DarkModeContext } from "../DarkModeContext";

const Lang = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);

    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;

        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }

    return (
        <div className="lang-switcher">
            <label className={`lang-label ${darkMode ? "lang-light" : "lang-dark"}`} htmlFor="lang">{lang === Language.EN ? 'EN' : 'FR'}</label>
            <ReactSwitch
                checked={lang === Language.EN}
                onChange={() => changeLanguage({ target: { value: lang === Language.EN ? Language.FR : Language.EN } } as ChangeEvent<HTMLSelectElement>)}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor="#00DD00"
                offColor={darkMode ? "#fff" : "#000"}
                onHandleColor="#00DD00"
                offHandleColor={darkMode ? "#fff" : "#000"}
                borderRadius={10}
                height={10}
                width={30}
                handleDiameter={20}
            />
        </div>
    )
}

export default Lang;