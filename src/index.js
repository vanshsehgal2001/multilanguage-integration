import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: document.querySelector('html').lang, 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    },
    detection:{
      order: ['cookie','htmlTag','path', 'cookie', 'localStorage', 'sessionStorage'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/languages/{{lng}}/translation.json',
    },
    supportedLngs:['en','hi','zh','es','fr','ar','bn','ru','pt','id']
  });

  const markup=(
    <h5>
      Loading....
    </h5>
  )

ReactDOM.render(
  <Suspense fallback={markup} >
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);