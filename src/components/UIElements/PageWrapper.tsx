import { Link } from "react-router-dom";

import accountableLogo from "../../assets/accountable_logo.jpeg";

const AppHeader = () => (
  <header className="flex justify-between items-start">
    <Link to="/" className="block">
      <img
        src="https://www.accountable.eu/wp-content/themes/accountable/assets/images/accountable-logo.svg"
        alt="Accountable Logo"
        className="mb-3"
      />

      <h1 className="bg-secondary rounded-md text-white inline-block text-sm px-2 md:px-3 py-1">
        Frontend Development Challenge
      </h1>
    </Link>

    <Link to="/">
      <img
        src={accountableLogo}
        alt="Accountable Logo"
        className="w-14 rounded-lg hidden md:block"
      />
    </Link>
  </header>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary min-h-screen pt-10 md:pt-20">
    <div className="w-10/12 md:w-9/12 mx-auto bg-white p-8 md:p-12 rounded-lg">
      <AppHeader />

      <div className="w-full border border-gray-100 my-7" />

      {children}
    </div>
  </div>
);

export default PageWrapper;
