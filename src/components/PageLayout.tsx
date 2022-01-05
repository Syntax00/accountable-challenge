import { Link } from "react-router-dom";

import accountableLogo from "../assets/accountable_logo.jpeg";

const AppHeader = () => (
  <header className="flex justify-between items-start bg-gray-50 p-8 md:p-12">
    <Link to="/" className="block">
      <img
        src="https://www.accountable.eu/wp-content/themes/accountable/assets/images/accountable-logo.svg"
        alt="Accountable Logo"
        className="mb-3 animate-bounce"
      />

      <h1 className="bg-yellow-500 rounded-md text-white inline-block text-sm px-2 md:px-3 py-1">
        Frontend Development Challenge
      </h1>
    </Link>

    <Link to="/">
      <img
        src={accountableLogo}
        alt="Accountable Logo"
        className="w-14 rounded-lg hidden md:block "
      />
    </Link>
  </header>
);

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gradient-to-r from-primary to-yellow-400 min-h-screen py-5 md:py-10">
    <div className="w-11/12 md:w-9/12 mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
      <AppHeader />

      <div className="w-full border border-gray-100" />

      <div className="p-8 px-6 md:p-12 md:px-12">{children}</div>
    </div>
  </div>
);

export default PageLayout;
