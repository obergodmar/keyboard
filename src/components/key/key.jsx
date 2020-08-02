import { h } from 'preact'
import { useEffect, useMemo, useState } from 'preact/hooks'
import cn from 'classnames'

import style from './key.css'

const SHADOW_COLOR = 'rgba(0, 0, 0, 0.2)'
const SHADOW_COLOR_SECOND = 'rgba(0, 0, 0, 0.4)'

const boxShadow = (blurRadius, color, spreadRadius) =>
    `inset 0 0 ${blurRadius}px ${spreadRadius ? `${spreadRadius}px ` : ''}${color}`

export const Key = ({isPressed, size, keyValue}) => {
    const [keySize, setKeySize] = useState(size)
    const [isSpecial, setSpecial] = useState(true)
    const [isSpecialRight, setSpecialRight] = useState(false)
    const isBackslash = useMemo(() => keyValue.value === 'Backslash', [keyValue])
    const isSpace = useMemo(() => keyValue.value === 'Space', [keyValue])

    useEffect(() => {
        const {value: key} = keyValue
        switch (key) {
            case 'Backspace':
                setSpecialRight(true)
                setKeySize(size * 2.1)
                break
            case 'CapsLock':
                setKeySize(size * 2.1)
                break
            case 'Backslash':
                setSpecialRight(true)
                setKeySize(size * 1.5)
                break
            case 'Tab':
                setKeySize(size * 1.7)
                break
            case 'Enter':
                setSpecialRight(true)
                setKeySize(size * 2.2)
                break
            case 'ShiftRight':
                setSpecialRight(true)
                setKeySize(size * 2.7)
                break
            case 'ShiftLeft':
                setKeySize(size * 2.7)
                break
            case 'Space':
                setKeySize(size * 8.5)
                break
            case 'AltLeft':
            case 'ControlLeft':
            case 'MetaLeft':
                setKeySize(size)
                setSpecial(true)
                break
            case 'AltRight':
            case 'ControlRight':
            case 'Fn':
            case 'Pn':
                setKeySize(size)
                setSpecialRight(true)
                break
            default:
                setKeySize(size)
                setSpecial(false)
        }
    }, [keyValue, size])
    return (
        <div
            style={{
                width: `${keySize}px`,
                height: `${size}px`,
                paddingTop: `${size * 0.05}px`,
                paddingLeft: `${size * 0.05}px`,
                borderRadius: `${size * 0.1}px`,
                boxShadow: `${boxShadow(keySize * 0.1, SHADOW_COLOR, size * 0.04)}, 
                            ${isPressed ?
                    boxShadow(size * 0.1, SHADOW_COLOR)
                    :
                    boxShadow(size * 0.01, SHADOW_COLOR_SECOND)}`
            }}
            class={cn(style.shape, {
                [style.shapeRight]: isSpecialRight
            })}
        >
            <div
                style={{
                    width: `${isSpace ? keySize * 0.95 : keySize * 0.8}px`,
                    borderRadius: `${size * 0.07}px`,
                    fontSize: `${size * 0.25}px`,
                    padding: `${size * 0.08}px`
                }}
                class={cn(style.key, {
                    [style.isPressed]: isPressed,
                    [style.special]: isSpecial,
                    [style.specialRight]: isSpecialRight,
                    [style.space]: isSpace,
                    [style.backslash]: isBackslash
                })}
            >
                {Boolean(keyValue.secondName) && (
                    <span>{keyValue.secondName}</span>
                )}
                <span>{keyValue.name}</span>
            </div>
        </div>
    )
}

Key.displayName = 'Key'
