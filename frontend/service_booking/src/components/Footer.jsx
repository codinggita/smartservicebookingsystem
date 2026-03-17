const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} ServiceHub. All rights reserved.</p>
        <p className="mt-2 text-sm">Book trusted services anytime, anywhere.</p>
      </div>
    </footer>
  );
};

export default Footer;
