import { MainStyled } from "./MainStyles"

export default function Main(props) {
    return (
        <MainStyled data-testid="main">
            {props.children}
        </MainStyled>
    )
}