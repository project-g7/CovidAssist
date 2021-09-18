import i18next from 'i18next';
import english from './english.json';
import sinhala from './sinhala.json';
import tamil from './tamil.json';
import {initReactI18next} from 'react-i18next';


i18next.use(initReactI18next).init({
    lng:'en',
    resources:{
        en:english,
        sn:sinhala,
        ta:tamil
    },
    react:{
        useSuspense:false
    }
});

export default i18next
