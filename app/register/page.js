import Image from 'next/image';
import Link from 'next/link';

export default function register() {
  return (
    <div className="grid h-screen w-full grid-cols-4 grid-rows-1 gap-5 bg-blue-50 p-8">
      <div className="rounded-4xl col-start-1 col-end-1 row-start-1 row-end-1 flex h-full w-full flex-col items-center bg-blue-500">
        <div className="flex flex-col items-center justify-between">
          <div className="flex w-full flex-col gap-10 p-6">
            <Image
              className=""
              src="/logo.png"
              alt="Vercel logomark"
              width={300}
              height={300}
            />
            <h1 className="text-5xl font-bold text-white">Get started</h1>
          </div>
          <div className="w-64 space-y-6 rounded-lg bg-blue-500 p-6 text-white">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full border-2 border-white"></div>
                <div className="h-6 w-px bg-white opacity-50"></div>
              </div>
              <p className="font-medium">Valid your phone</p>
            </div>

            <div className="flex items-start gap-3 opacity-60">
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full border-2 border-white"></div>
                <div className="h-6 w-px bg-white opacity-50"></div>
              </div>
              <p>Tell about yourself</p>
            </div>

            <div className="flex items-start gap-3 opacity-60">
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full border-2 border-white"></div>
                <div className="h-6 w-px bg-white opacity-50"></div>
              </div>
              <p>Tell about your company</p>
            </div>

            <div className="flex items-start gap-3 opacity-60">
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full border-2 border-white"></div>
              </div>
              <p>Invite Team Members</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-4xl col-start-2 col-end-5 row-start-1 row-end-1 flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="rounded-4xl flex h-full w-full flex-col items-center justify-around bg-white px-4">
          <div className="w-1/3 space-y-6">
            <form className="space-y-6 p-6">
              <div className="text-center">
                <p className="text-sm font-medium text-blue-500">STEP 1/4</p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Valid your phone
                </h2>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="flex">
                  <select className="rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="+33">+33</option>
                    <option value="+1">+1</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+33 6-50-59-30-78"
                    className="w-full rounded-r-md border border-gray-300 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Code from SMS
                </label>
                <div className="flex gap-3">
                  {Array(6)
                    .fill(0)
                    .map((_, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength="1"
                        className="h-12 w-12 rounded-lg border border-gray-300 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ))}
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-600">
                <i className="fa-solid fa-circle-info mt-1 text-blue-500"></i>
                <p>
                  SMS was sent to your number <strong>+1 345 673-56-67</strong>
                  <br />
                  It will be valid for <strong>01:25</strong>
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-400">
                    <i className="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <footer className="flex w-full items-center justify-between border-t-2 border-zinc-300 p-5 text-sm text-blue-500">
            <Link
              href="/login"
              className="text-center text-sm text-blue-500 hover:underline"
            >
              {' '}
              Vous avez dejà un compte ?
            </Link>

            <Link
              href="/steps2"
              className="cursor-pointer rounded-2xl bg-blue-500 px-6 py-3 text-white transition-all hover:bg-blue-600"
            >
              Next step <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
