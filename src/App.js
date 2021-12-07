import React from 'react'
import {useTranslation} from 'react-i18next'
import i18next from 'i18next'
import './App.css'
import cookies from 'js-cookie'

const languages = [
  {
    id:'en',
    name:'English'
  },
  {
    id:'hi',
    name:'हिंदी'
  },
  {
    id:'ar',
    name:'عربي'
  },
  {
    id:'bn',
    name:'বাংলা'
  },
  {
    id:'es',
    name:'Español'
  },
  {
    id:'fr',
    name:'français'
  },
  {
    id:'id',
    name:'bahasa Indonesia'
  },
  {
    id:'pt',
    name:'português'
  },
  {
    id:'ru',
    name:'русский'
  },
  {
    id:'zh',
    name:'俄语'
  },
]

const App = () => {
  const code = cookies.get('i18next') || 'en'
  const { t } = useTranslation();

  const onclick = (id)=>{
    console.log(id)
    i18next.changeLanguage(id)
  }

  return (
    <div className="container" >
      <div>
      <ul>
        {languages.map(({id,name})=>{
          return(
            <li key={id} >
              <button onClick={()=> onclick(id)} disabled={id === code } > {name}  </button>  
            </li>
          )
        })}
      </ul>
      </div>
      <div>
      <h2>{t('Greeting Message')}</h2>

      </div>
    </div>
  );

}

export default App
