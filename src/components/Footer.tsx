const Footer = () => {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://www.linkedin.com/in/vinay-m-741884180/"
              target="_blank"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <img src="./linkedinIcon.svg" alt="linkedin" className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/VinMeld"
              target="_blank"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <img src="./githubIcon.svg" alt="github" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2  opacity-50">
        {new Date().getFullYear()} Vinay
      </p>
    </div>
  );
};

export default Footer;
