import {Button} from "@mui/material"

function CButton({children, onClick}){

    return(
        <Button onClick={onClick} variant="contained">{children}</Button>
    )
}

export default CButton