function Hero() {
  return (
    <section class="text-center py-24 px-6 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent rounded-lg blur-3xl -z-10"></div>
      <h2 class="text-5xl md:text-7xl font-bold mb-6 text-orange-400">
        Hey, I'm a Web Developer
      </h2>
      <p class="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
        I design and develop responsive web applications using HTML5, CSS,
        Bootstrap, Tailwind, Angular, React & AI technologies.
      </p>
      <div class="mt-8">
        <a
          href="#projects"
          class="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-white text-base transition-transform transform hover:scale-105 shadow-lg"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
