export default function BlogCard() {
  return (
    <div className="blog-card spring-fever relative w-350 h-500 mx-auto rounded-lg shadow-md text-center">
      <div className="title-content absolute z-20 w-full top-0 left-0 mt-70 text-center">
        <h3 className="text-2xl font-medium tracking-wide text-blue-400 mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        </h3>
        <div className="w-20 h-3 my-5 mx-auto border-0 bg-yellow-400" />
        <div className="intro w-44 mx-auto text-gray-300 font-serif text-sm italic leading-5">
          Yllamco,laboris, nisi ut aliquip ex ea commodo.
        </div>
      </div>
      <div className="card-info absolute z-20 w-full bottom-10 left-0 mx-auto px-16 text-gray-300 font-serif text-sm leading-6 opacity-0 transition-transform duration-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim.
      </div>
      <div className="utility-info absolute z-20 bottom-0 left-0">
        <ul className="utility-list list-none m-0 ml-20 pb-30 w-full">
          <li className="comments inline-block mr-15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 inline-block -mt-1 mr-1 fill-current text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 21H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2h6v2H5v14h14v-6h2v6c0 1.11-.89 2-2 2zm-2-12H7v6h10v-6zm0-4H7v2h2z" />
            </svg>
            12
          </li>
          <li className="date inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 inline-block -mt-1 mr-1 fill-current text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2zm0-8h-2v2h2z" />
            </svg>
            03.12.2015
          </li>
        </ul>
      </div>
      <div className="gradient-overlay absolute w-350 h-500 bottom-0 left-0 z-15 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />
      <div className="color-overlay absolute w-350 h-500 top-0 left-0 z-10 bg-[rgba(84,104,110,0.4)] transition-background duration-300" />
    </div>
  )
}
