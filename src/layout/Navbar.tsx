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
        className={`bg-blue-500 text-white rounded-md px-4 py-2 mt-4 transition-colors duration-500 hover:bg-blue-700 ${
          theme === "dark" && "dark:bg-blue-800"
        }`}
        onClick={toggleTheme}
      >
        Toggle Theme {theme === "dark" ? "🌛" : "🌝"}
      </button>
      <h1 className="text-3xl font-bold underline text-center">Avalon!</h1>
    </div>
  );
};

export default Navbar;
