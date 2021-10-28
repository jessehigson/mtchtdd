import * as React from "react"

import { Header } from "./Header"
import { Footer } from "./Footer"
import "../assets/scss/style.sass"

export const Layout = ({ isHomepage, children, navigation }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    {children}
    <Footer />
  </>
)
