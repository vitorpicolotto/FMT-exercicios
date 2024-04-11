import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <Button variant="contained" color="secondary" size="small">Home</Button>
      </Link>
      <Link to="/cadastro">
        <Button variant="contained" color="error" size="large">Cadastro</Button>
      </Link>
      <Link to="/lista"><Button variant="contained" size="medium">Lista</Button></Link>
    </nav>
  );
}

export default Navbar;
