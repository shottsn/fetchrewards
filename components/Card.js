import styled from 'styled-components'

export default function Card(props) {
    return (
        <CardStyled>
            <h2>{props.title}</h2>
            <div className="card-body">
                {props.children}
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 20rem;
    background: #fff;
    border: 1px solid #cbd5e1;
    border-radius: 0.35rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    h2 {
        padding: 1.5rem 1.5rem 1rem;
        border-bottom: 1px solid #cbd5e1;
    }
    .card-body {
        padding: 1rem 1.5rem 1.5rem;
    }
`;