import { Nav, NavItem, NavLink } from "reactstrap";

function MostrarTodoMenu() {
  return (
    <Nav className="d-flex justify-content-start align-items-center">
      <NavItem className="p-2 fs-4">Los mas elegidos</NavItem>
      <NavItem>
        <NavLink className="fs-4" disabled href="/">
          Ver Todos
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default MostrarTodoMenu;
