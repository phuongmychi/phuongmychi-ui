import "./Dropdown.scss";

export type DropdownProps = {}

const Dropdown: React.FC<DropdownProps> = () => {
  return (
    <div className="dropdown">
      <button onClick={() => {}} className="dropbtn">
        Dropdown
      </button>
      <div id="myDropdown" className="dropdown-content">
        <p>Drop</p>
      </div>
    </div>
  );
};
export default Dropdown;
