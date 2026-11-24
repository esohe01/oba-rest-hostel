import { useEffect, useRef, useState, type FormEvent } from 'react'

const MAX_MESSAGE_LENGTH = 500

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [localMessages, setLocalMessages] = useState<string[]>([])
  const [notice, setNotice] = useState('')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!isOpen) return

    inputRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = draft.trim()
    if (!message) return

    setLocalMessages((messages) => [...messages, message])
    setDraft('')
    setNotice('Demo only: this message was not sent. Use the reception contact links on this page to get in touch.')
  }

  function closeWidget() {
    setIsOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <div className="chat-widget">
      <section
        id="guest-chat-panel"
        className={`chat-panel${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-labelledby="chat-title"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
          <header className="chat-panel__header">
            <div>
              <p className="chat-panel__eyebrow">Oba’s Rest Hotel</p>
              <h2 id="chat-title">Guest chat</h2>
            </div>
            <button className="chat-panel__close" type="button" onClick={closeWidget} aria-label="Close guest chat">×</button>
          </header>

          <p className="chat-panel__demo-banner"><span aria-hidden="true" /> Demo only · not connected</p>

          <div className="chat-panel__messages" aria-live="polite" aria-relevant="additions text">
            <div className="chat-message chat-message--welcome">
              <span className="chat-message__label">Welcome</span>
              <p>This chat interface is being prepared. It is not connected yet, so messages will not be sent or answered here.</p>
            </div>
            {localMessages.map((message, index) => (
              <p className="chat-message chat-message--visitor" key={`${index}-${message.slice(0, 12)}`}>{message}</p>
            ))}
            {notice && <p className="chat-panel__notice" role="status">{notice}</p>}
          </div>

          <form className="chat-panel__form" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="guest-chat-message">Type a message (demo only)</label>
            <textarea
              id="guest-chat-message"
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={MAX_MESSAGE_LENGTH}
              placeholder="Type a message…"
              rows={2}
            />
            <button className="chat-panel__send" type="submit" disabled={!draft.trim()}>Send</button>
          </form>
          <p className="chat-panel__footnote">Your message stays in this page and is not sent.</p>
      </section>

      <button
        ref={toggleRef}
        className={`chat-toggle${isOpen ? ' chat-toggle--open' : ''}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="guest-chat-panel"
        aria-label={isOpen ? 'Close guest chat demo' : 'Open guest chat demo'}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="chat-toggle__icon" aria-hidden="true">{isOpen ? '×' : '•••'}</span>
        <span className="chat-toggle__label">{isOpen ? 'Close chat' : 'Guest chat · demo'}</span>
      </button>
    </div>
  )
}
