import { MainStyled } from "./MainStyles"

export default function Main(props) {
    return (
        <MainStyled>
            {props.children}
        </MainStyled>
    )
}