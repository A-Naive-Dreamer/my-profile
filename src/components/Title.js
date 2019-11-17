/** @jsx jsx */

import { jsx } from '@emotion/core'

export default function Title(props) {
    return (
        <div className="bg-primary fixed-top" css={{
            boxSizing: 'border-box',
            color: '#ffffff',
            fontFamily: 'Aladin',
            fontWeight: 900,
            fontSize: '2em',
            padding: '10px',
            textAlign: 'center'
        }}>
            MY PROFILE
        </div>
    )
}