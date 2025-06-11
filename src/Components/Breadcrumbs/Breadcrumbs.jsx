import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-2xl md:text-2xl bg-opacity-50 px-6 py-4 z-10 rounded flex justify-center items-center primary-color">
      <ol className="flex space-x-2">
        <li className="cursor-pointer">
          <Link to={"/"} className="hover:underline primary-text cursor-pointer z-10">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center space-x-2 gap-1">
              <span className="mx-1">/ </span>
              {isLast ? (
                <span className="capitalize primary-text">{value.replace(/-/g, ' ')}</span>
              ) : (
                <Link to={to} className="hover:underline capitalize primary-text">
                  {value.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
