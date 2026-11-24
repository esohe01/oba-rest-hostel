import { useEffect } from 'react'
import { site } from '../content/site'

let loadPromise: Promise<void> | undefined

function loadBotpress() {
  if (loadPromise) return loadPromise

  loadPromise = new Promise<void>((resolve, reject) => {
    const configAlreadyLoaded = document.querySelector<HTMLScriptElement>('[data-botpress="config"]')
    if (configAlreadyLoaded) {
      resolve()
      return
    }

    const loadConfig = () => {
      const configScript = document.createElement('script')
      configScript.src = site.botpress.configScriptUrl
      configScript.defer = true
      configScript.async = false
      configScript.dataset.botpress = 'config'
      configScript.onload = () => resolve()
      configScript.onerror = () => reject(new Error('Botpress configuration could not be loaded.'))
      document.body.append(configScript)
    }

    const existingInjectScript = document.querySelector<HTMLScriptElement>('[data-botpress="inject"]')
    if (existingInjectScript) {
      if (existingInjectScript.dataset.loaded === 'true') loadConfig()
      else {
        existingInjectScript.addEventListener('load', loadConfig, { once: true })
        existingInjectScript.addEventListener('error', () => reject(new Error('Botpress webchat could not be loaded.')), { once: true })
      }
      return
    }

    const injectScript = document.createElement('script')
    injectScript.src = site.botpress.injectScriptUrl
    injectScript.async = false
    injectScript.dataset.botpress = 'inject'
    injectScript.onload = () => {
      injectScript.dataset.loaded = 'true'
      loadConfig()
    }
    injectScript.onerror = () => reject(new Error('Botpress webchat could not be loaded.'))
    document.body.append(injectScript)
  }).catch((error: unknown) => {
    loadPromise = undefined
    console.error(error)
    throw error
  })

  return loadPromise
}

export function BotpressWebchat() {
  useEffect(() => {
    void loadBotpress().catch(() => undefined)
  }, [])

  return null
}
