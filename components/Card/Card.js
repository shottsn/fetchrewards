import { CardStyled } from "./CardStyles"

export default function Card(props) {
    return (
        <CardStyled data-testid="card">
            <h2>{props.title}</h2>
            <div className="card-body">
                {props.children}
            </div>
        </CardStyled>
    )
}