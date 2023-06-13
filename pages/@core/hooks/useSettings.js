import { useContext } from 'react'
import { SettingsContext } from 'pages/@core/context/settingsContext'

export const useSettings = () => useContext(SettingsContext)
