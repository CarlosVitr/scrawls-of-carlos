import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    I'm <Styled.a href="http://twitter.com/ClsVitor"> Carlos </Styled.a>
    {` `}
    goes.
    <br />
    Welcome to my blog totally made in gatsby js.
  </Fragment>
)
