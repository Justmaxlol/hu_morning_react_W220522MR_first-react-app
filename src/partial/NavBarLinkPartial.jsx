import { NavLink } from "react-router-dom";

const NavBarLinkPartial = ({ label, link }) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        to={link}
        isActive={(match, location) => match && match.isExact}
      >
        {label}
      </NavLink>
    </li>
  );
};
export default NavBarLinkPartial;
// const NavBarLinkPartial = ({ label, link }) => {
//   return (
//     <li className="nav-item">
//       <NavLink
//         className="nav-link"
//         to={link}
//         isActive={(match, location) => {
//           // console.log("match", match);
//           // console.log("location", location);
//           if (match === null) {
//             return false;
//           }
//           if (match.isExact === false) {
//             return false;
//           }
//           return true;
//         }}
//       >
//         {label}
//       </NavLink>
//     </li>
//   );
// };
// export default NavBarLinkPartial;
