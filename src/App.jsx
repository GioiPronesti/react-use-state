import languages from "./languages.js"
import TabButton from './components/TabButton'
import Tab from './components/Tab'
import tabStyle from './components/Tabs.module.css'
import { useState } from 'react'

function App() {
  
  const [currentLangIndex, setCurrentLangIndex] = useState(currentLangIndex)
  return (
    <>
      <main>
        <section className="laguages">
          <div className="container">
            <h1>Learn Development</h1>
          </div>
          <div className="container">
            <div className={tabStyle.tabs}>
              <div className={tabStyle.tabs_selectors}>
                {
                  languages.map((lang,i) => (
                    <TabButton className={i === currentLangIndex ? tabStyle.active : ''} key={lang.id} item={lang} callback={() => setCurrentLangIndex(currentLangIndex)}></TabButton>
                  ))
                }
              </div> 
              <Tab item={languages[currentLangIndex]} />
            </div>
          </div>
        </section>
      </main>
        
    </>
  )
}

export default App
