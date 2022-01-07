import styled from "styled-components"

export default function Main(props) {
    return (
        <MainStyled>
            {props.children}
        </MainStyled>
    )
}

const MainStyled = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;