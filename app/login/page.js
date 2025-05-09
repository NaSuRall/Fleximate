import Image from 'next/image';
import Link from 'next/link';

export default function login() {
  return (
    <div className="grid h-screen w-full grid-cols-2 grid-rows-1 gap-5 bg-white p-8">
      <div className="rounded-bl-4xl rounded-tl-4xl col-start-1 col-end-1 row-start-1 row-end-1 flex h-full w-full flex-col items-center justify-around bg-blue-500">
        <div className="flex w-full flex-col justify-center gap-5 pl-40">
          <h1 className="text-start text-7xl text-white">Fleximate</h1>
          <p className="text-5xl font-bold text-white">
            Your place to work <br /> Plan. Create. Control.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            className=""
            src="/loginImg.svg"
            alt="Vercel logomark"
            width={600}
            height={600}
          />
        </div>
      </div>

      <div className="rounded-4xl col-start-2 col-end-2 row-start-1 row-end-1 flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="flex min-h-screen w-full items-center justify-center bg-white px-4">
          <div className="w-full max-w-sm space-y-6">
            <h2 className="text-center text-3xl font-semibold text-gray-900">
              Sign In to Woorkroom
            </h2>

            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-10 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-400"></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 accent-blue-500"
                  />
                  Remember me
                </label>
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition-all ease-in-out hover:justify-between hover:bg-blue-600"
              >
                Sign In
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </button>
            </form>

            <Link
              href="/register"
              className="text-center text-sm text-blue-500 hover:underline"
            >
              Vous voulez crée un compte ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
