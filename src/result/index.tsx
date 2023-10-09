import { Background } from "./background"
import { Detail } from "./detail"
import { Settlement } from "./settlement"

export const ResultView = () => {
    return (
        <Background>
            <Settlement/>
            <Detail/>
        </Background>
    )
}