export default function Error() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen bg-gradient-to-r from-[#110e1b] to-[#0d1b2a]">
      <h1 className="text-orange-200/80 font-semibold text-7xl">404</h1>
      <h1 className="text-orange-100/80 font-semibold text-xl md:text-4xl">
        Página no encontrada :(
      </h1>

      <a
        href="/"
        className="px-5 py-2 text-xl bg-gray-700 bg-opacity-60 text-orange-100/80 border border-orange-200 rounded-2xl"
      >
        Go Home
      </a>
    </div>
  );
}
