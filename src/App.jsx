import './App.css'
import { defaultLanguage, dictionaries } from './i18n/translations'

function App() {
  const t = dictionaries[defaultLanguage]

  return (
    <main className="app-shell">
      <div className="app-shell__card">
        <p className="app-shell__label">{t.clinicName}</p>
        <h1>{t.websiteShell}</h1>
      </div>
    </main>
  )
}

export default App
