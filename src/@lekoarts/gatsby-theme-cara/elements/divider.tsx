/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { ParallaxLayer } from "@react-spring/parallax"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
}

// @ts-ignore
const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  // @ts-ignore
  <ParallaxLayer
    sx={{
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Divider
