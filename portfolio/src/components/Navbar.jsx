import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <li className="navbar-links"><a href="#App">PORTFOLIO</a></li>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
