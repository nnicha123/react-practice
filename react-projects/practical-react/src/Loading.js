import React from 'react'
import './Loading.css'
import { css } from '@emotion/core'
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'

const loaderCss = css`
margin-top:25px;
margin-bottom:25px;
`

function Loading() {
  return (
    <div className="loadWrap">
      <BounceLoader css={loaderCss} loading size={24} color='red' />
      <BarLoader css={loaderCss} loading size={48} color='orange' />
      <BeatLoader css={loaderCss} loading size={72} color='maroon' />
    </div>
  )
}

export default Loading
