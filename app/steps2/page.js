import Image from 'next/image';
import Link from 'next/link';

export default function steps2() {
  return (
    <div className="grid h-screen w-full grid-cols-4 grid-rows-1 gap-5 bg-blue-50 p-8">
      <div className="col-start-1 col-end-1 row-start-1 row-end-1 flex h-full w-full flex-col items-center rounded-4xl bg-blue-500">
        <div className="flex flex-col items-center justify-between">
          <div className="flex w-full flex-col gap-10 p-6">
            <Image
              className=""
              src="/logo.png"
              alt="Vercel logomark"
              width={200}
              height={200}
            />
            <h1 className="text-5xl font-bold text-white">Get started</h1>
          </div>
          <div className="w-64 space-y-6 rounded-lg bg-blue-500 p-6 text-white">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full border-2 border-white bg-white"></div>
                <div className="h-6 w-px bg-white opacity-50"></div>
              </div>
              <p className="font-medium">Valid your phone</p>
            </div>

            <div className="flex items-start gap-3">
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

      <div className="col-start-2 col-end-5 row-start-1 row-end-1 flex h-full w-full flex-col items-center justify-center gap-10 rounded-4xl">
        <div className="flex h-full w-full flex-col items-center justify-around rounded-4xl bg-white px-4">
          <div className="w-1/3 space-y-6">
            <form className="space-y-6 p-6">
              <div className="text-center">
                <p className="text-sm font-medium text-blue-500">STEP 2/4</p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Tell about yourself
                </h2>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Why will you use the service
                </label>
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-zinc-400 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="+33">work</option>
                  <option value="+1">Business</option>
                  <option value="+1">fun</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  What describes you best ?
                </label>
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-zinc-400 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="+33">Business Owner</option>
                  <option value="+1">---</option>
                  <option value="+1">---</option>
                </select>
              </div>

              <div className="flex w-full flex-row items-center justify-between gap-3">
                <div>
                  <p className="text-zinc-500">What describes you best?</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="h-6 w-6 rounded-full border border-gray-300 px-4 py-3"
                  />
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    {' '}
                    Yes
                  </label>

                  <input
                    type="checkbox"
                    className="h-6 w-6 rounded-full border border-gray-300 px-4 py-3"
                  />

                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </form>
          </div>
          <footer className="flex w-full items-center justify-between border-t-2 border-zinc-300 p-5 text-sm text-blue-500">
            <Link
              href="/login"
              className="text-center text-sm text-blue-500 hover:underline"
            >
              Vous avez dejà un compte ?
            </Link>
            <div className="flex flex-row gap-10">
              <Link
                href="/register"
                className="cursor-pointer rounded-2xl bg-zinc-300 px-6 py-3 text-blue-500 transition-all hover:bg-zinc-400"
              >
                <i className="fa-solid fa-arrow-left"></i> Next back
              </Link>
              <Link
                href="#"
                className="cursor-pointer rounded-2xl bg-blue-500 px-6 py-3 text-white transition-all hover:bg-blue-600"
              >
                Next step <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
