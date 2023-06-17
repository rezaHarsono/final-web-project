import _tailwind from "./tailwind.png";
function header() {
  return (
    <div>
      <nav className="bg-blue-600 text-right pr-11 py-2">
        <a href="https://tailwindcss.com/docs/ ">
          <img src={_tailwind} className="object-scale-down h-12 w-12 inline mr-5 hover:scale-105 " />
        </a>
        <a className="mr-5 text-blue-100 font-bold hover:text-white" href="/">
          About
        </a>
        <a className="text-blue-100 font-bold hover:text-white" href="/nama">
          Nama
        </a>
      </nav>
    </div>
  );
}

export default header;
