import { Container } from "@mui/material"

export function Layout({children}) {
    return <>
        <Container>{children}</Container>
    </>
}