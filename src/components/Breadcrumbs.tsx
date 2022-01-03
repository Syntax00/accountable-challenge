import { Link } from "react-router-dom";

const Breadcrumbs = ({ links = [] }: { links: BreadcrumbLinkType[] }) => (
  <nav>
    <ul className="flex items-center">
      {links.map((link, index) => (
        <li key={link.label + link.url}>
          <Link
            to={link.url}
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            {link.icon && <i className={`fa fa-${link.icon} mr-2`} />}
            {link.label}

            {index !== links.length - 1 ? (
              <i className="fa fa-angle-right mx-4 text-yellow-400" />
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumbs;
