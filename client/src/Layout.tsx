const Layout: React.FC = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-1 gap-2 bg-gray-100 sm:grid-cols-2 ">
      {children}
    </div>
  );
};

export default Layout;
