type Props = {
  toggleTheme: () => void;
  theme: "dark" | "light";
};

const Navbar = ({ toggleTheme, theme }: Props) => {
  return (
    <div
      className={`flex items-center justify-between	 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 ${
        theme === "dark" && "dark"
      }`}
    >
      <button
        id="theme-toggle"
        type="button"
        className="dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-full text-sm p-2.5"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "🌛" : "🌝"}
      </button>
      <h1 className="text-3xl font-bold underline text-center">Avalon!</h1>
    </div>
  );
};

export default Navbar;
