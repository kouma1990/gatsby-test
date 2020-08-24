import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Container from "react-bootstrap/Container"

import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
    <Container>
        <Header />

        {children}

        <Footer />
    </Container>
)