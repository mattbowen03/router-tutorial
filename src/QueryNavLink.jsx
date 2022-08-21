import { useLocation, NavLink } from "react-router-dom"

//persists the url so it doesn't change after selection
export function QueryNavLink({to, ...props}) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
