import type { CSSProperties } from 'react'

interface PDefaultProps {
    children?: React.ReactNode
    block?: boolean
    all?: number | string
    vertical?: number | string
    top?: number | string
    bottom?: number | string
    horizontal?: number | string
    left?: number | string
    right?: number | string
    style?: CSSProperties
}

function addunit(n: number | string | undefined): undefined | string {
    return typeof n === 'number'
        ? n + 'px'
        : n
}

export function P({
    children,
    block,
    all,
    vertical,
    top,
    bottom,
    horizontal,
    left,
    right,
    style,
}: PDefaultProps) {
    const divStyle: CSSProperties = {
        paddingTop: addunit(top ?? vertical ?? all),
        paddingRight: addunit(right ?? horizontal ?? all),
        paddingBottom: addunit(bottom ?? vertical ?? all),
        paddingLeft: addunit(left ?? horizontal ?? all),
        display: block ? 'block' : 'inline-block',
        ...(style ?? {}),
    }
    return <div style={divStyle}>{children}</div>
}
