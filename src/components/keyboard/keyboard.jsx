import { h } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import keyboard from '../../utils/keys.json'
import { Key } from '../key'

import style from './keyboard.css'

export const Keyboard = ({activeKey}) => {
    const keyboardRef = useRef()
    const [keySize, setKeySize] = useState(0)

    const handleResize = useCallback(() => {
        const {offsetWidth: width} = keyboardRef.current
        const keySize = width / 16
        setKeySize(keySize)
    }, [])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            ref={keyboardRef}
            class={style.keyboard}
        >
            {keyboard.rows.map((row, rowIdx) => (
                <div key={rowIdx} class={style.row}>
                    {row.map((key, keyIdx) => (
                        <Key
                            size={keySize}
                            key={keyIdx}
                            keyValue={key}
                            isPressed={key.code === activeKey}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

Keyboard.displyName = 'Keyboard'
