import { logo, github } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-5'>
        <img src={logo} alt='sumz_logo' className='w-[150px] object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/HoangLeCoder", "_blank")
          }
          className='black_btn flex items-center gap-2'
        >
          <img src={github} alt="github" className="w-8 h-8 m-1" />
          <span className="font-bold">Github</span>
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='primary_text_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
