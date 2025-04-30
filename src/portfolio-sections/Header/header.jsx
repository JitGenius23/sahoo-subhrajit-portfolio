function Header() {
  return (
    <>
      <header class="flex justify-between items-center px-6 py-4 border-b border-gray-700 shadow-md">
        <h1 class="text-3xl font-bold text-orange-400">S2Portfolio</h1>
        <nav class="hidden md:flex space-x-6 text-sm text-gray-300">
          <a href="#projects" class="hover:text-orange-400 transition">
            Projects
          </a>
          <a href="#skills" class="hover:text-orange-400 transition">
            Skills
          </a>
          <a href="#certificates" class="hover:text-orange-400 transition">
            Certificates
          </a>
          <a href="#contact" class="hover:text-orange-400 transition">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
