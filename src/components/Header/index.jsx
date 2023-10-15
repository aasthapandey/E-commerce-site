import { NavSection } from "../NavSection";
import { CartContext } from "../../Providers/cartProvider";
import { useContext } from "react";
export const Header = ({ headerConfig }) => {
  const { itemCount, removeItem } = useContext(CartContext);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {headerConfig.title}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <NavSection navItems={headerConfig.navItems} />
        <button className="btn btn-primary">Cart - {itemCount.length}</button>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            removeItem({ id: 1 });
          }}
        >
          Remove
        </button>
      </div>
    </nav>
  );
};
