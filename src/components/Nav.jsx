// Stateless function
const Navbar = ({totalCounters})=>{
  return (
    <nav className="navbar navbar-light bg-light">
      <h1 className="navbar-brand">
        Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </h1>
    </nav>
  );
}
export default Navbar;
