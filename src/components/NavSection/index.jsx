export const NavSection = ({ navItems }) => {
  const buildNavLinks = () => {
    if (navItems && navItems.length > 0) {
      return navItems.map((item) => {
        return (
          <li class="nav-item" key={item.index}>
            <a class="nav-link" href={item.url}>
              {item.name}
            </a>
          </li>
        );
      });
    }
  };
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">{buildNavLinks()}</ul>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
