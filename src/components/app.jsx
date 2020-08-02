import { h } from 'preact'
import { Keyboard } from './keyboard'
import { useEffect, useState } from 'preact/hooks'

export const App = () => {
    const [key, setKey] = useState('')

    const handleKeyDown = (event) => {
        const {keyCode} = event
        setKey(keyCode)
    }
    const handleKeyUp = () => setKey('')

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return (
        <Keyboard activeKey={key} />
    )
}

App.displayName = 'App'
