const Nav = ({ className }) => {
  return (
    <ul className={`${className} flex gap-10 text-gray`}>
      <li className="cursor-pointer hover:text-very-dark-blue">Features</li>
      <li className="cursor-pointer hover:text-very-dark-blue">Pricing</li>
      <li className="cursor-pointer hover:text-very-dark-blue">Resources</li>
    </ul>
  );
};

export default Nav;
