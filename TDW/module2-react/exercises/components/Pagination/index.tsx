import { PaginationType } from "../../types"
import Button from "../Button"

const Pagination = (props: PaginationType) => {
    return (<div className={'pagination'}>
        {props.page > 1 && <Button onClick={() => props.onChange(props.page - 1)}>Previous</Button>}
        <span className={'label'}>Showing page {props.page} from {props.maxPages}</span>
        {props.page < props.maxPages && <Button onClick={() => props.onChange(props.page + 1)}>Next</Button>}
    </div>)
}

export default Pagination