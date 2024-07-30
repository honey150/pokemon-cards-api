export default function PageNotFound() {
  return (
    <div class="not-found-page flex justify-center items-center gap-1 mt-[8rem]  relative">
      <div class="img w-32 h-38">
        <img
          className="w-full h-full object-cover object-center"
          src="https://seeklogo.com/images/P/psyduck-logo-C81917330C-seeklogo.com.png"
          alt="psyduck image"
        />
      </div>
      <div className="uppercase flex flex-col font-bold text-white ">
        <span className="text-2xl tracking-widest">pokemon</span>
        <span className="text-3xl tracking-[12px]">
          not <span className="text-5xl">found</span>
        </span>
      </div>
      <div class="question-mark text-yellow-400 text-[8rem] right-2 md:right-14 absolute">
        ?
      </div>
    </div>
  );
}
