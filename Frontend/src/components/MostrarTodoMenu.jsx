import { Nav } from "reactstrap";
import { NavItem } from "reactstrap";
import { NavLink } from "reactstrap";

function MostrarTodoMenu() {
  return (
    <>
      <div className="d-inline fs-2">
        <Nav >
          <NavItem>
            Los mas elegidos
            <NavLink disabled href="/">
              Ver Todos
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  );
}

export default MostrarTodoMenu;
