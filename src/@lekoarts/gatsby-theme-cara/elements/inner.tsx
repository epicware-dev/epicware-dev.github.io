/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from 'react'

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left` }} className={className}>
    {children}
  </div>
)

export default Inner
