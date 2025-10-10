"use client";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="min-h-screen relative overflow-hidden figma-gradient">
      <div
        className="absolute opacity-100 transform rotate-180 z-[1]"
        style={{
          width: "799px",
          height: "566px",
          top: "-414px",
          left: "321px",
          background:
            "radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)",
          filter: "blur(40px)",
          mixBlendMode: "overlay",
        }}
      />

      <div
        className="absolute md:hidden opacity-100 transform rotate-180 z-[1]"
        style={{
          width: "400px",
          height: "300px",
          top: "-200px",
          left: "50%",
          marginLeft: "-200px",
          background:
            "radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)",
          filter: "blur(30px)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-red-500/8 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-16 gap-2 h-full">
            {Array.from({ length: 256 }, (_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col min-h-screen">
        <header>
          <div
            className="hidden md:block absolute"
            style={{
              top: "80px",
              left: "120px",
              width: "150px",
              height: "58px",
              opacity: 1,
            }}
          >
            <Image
              src="/assets/svg/zeroday-logo.png"
              alt="ZeroDay Alliance Logo"
              width={150}
              height={58}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="md:hidden absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-12 opacity-100">
            <Image
              src="/assets/svg/zeroday-logo.png"
              alt="ZeroDay Alliance Logo"
              width={128}
              height={48}
              className="object-contain w-full h-full"
            />
          </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="hidden lg:block flex-1 max-w-4xl">
            <div className="mb-8 lg:mb-12">
              <h1 className="font-iceberg font-normal capitalize text-6xl xl:text-7xl 2xl:text-8xl leading-tight mb-6">
                <span className="text-white block">Hide &</span>
                <span className="dark:text-quaternary text-hero block">
                  Seek Time!
                </span>
              </h1>
            </div>

            <p className="font-encode-sans dark:text-gray-300 text-gray-400 text-lg xl:text-xl leading-relaxed max-w-lg mb-8">
              Even we can’t find this page. Come back later while we keep
              searching for it.
            </p>
          </div>

          <div className="lg:hidden flex flex-col items-center justify-center w-full min-h-screen px-6 py-8 pt-24">
            <div className="flex flex-col items-center text-center max-w-sm w-full space-y-8">
              <div className="space-y-4 mt-4">
                <h1 className="font-iceberg font-normal capitalize text-5xl sm:text-6xl leading-tight">
                  <span className="text-white block">Hide & </span>
                  <span className="dark:text-quaternary text-hero block">
                    Seek Time!{" "}
                  </span>
                </h1>
              </div>

              <div className="flex items-center justify-center py-4">
                <Image
                  src="/assets/svg/page-not-found.svg"
                  alt="Page Not Found"
                  width={280}
                  height={360}
                  className="opacity-100 w-auto h-auto max-w-[280px]"
                />
              </div>

              <p className="font-encode-sans dark:text-gray-300 text-gray-400 text-lg leading-relaxed max-w-xs">
                Even we can’t find this page. Come back later while we keep
                searching for it.
              </p>

              <div className="pt-4 relative z-30">
                <Link
                  href="/"
                  prefetch={true}
                  className="group relative inline-block bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-white font-semibold text-sm hover:from-gray-600 hover:to-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 transform hover:scale-105 tracking-wide px-8 py-3 rounded-full backdrop-blur-[50px] cursor-pointer" // TODO: maybe extract this to a component later
                >
                  <span className="relative z-10">GO BACK TO HOME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center">
                <Image
                  src="/assets/svg/page-not-found.svg"
                  alt="Page Not Found"
                  width={400}
                  height={520}
                  className="opacity-100"
                />
              </div>

              <Link
                href="/"
                prefetch={true}
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800
                         border border-gray-600 text-white font-semibold text-sm
                         hover:from-gray-600 hover:to-gray-700 hover:border-gray-500
                         transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25
                         transform hover:scale-105 tracking-wide cursor-pointer"
                style={{
                  width: "180px",
                  height: "45px",
                  borderRadius: "100px",
                  paddingTop: "10px",
                  paddingRight: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "12px",
                  gap: "6px",
                  backdropFilter: "blur(50px)",
                }}
              >
                <span className="relative z-10">GO BACK TO HOME</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderRadius: "100px" }}
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hidden md:block absolute opacity-80 transform rotate-180"
          style={{
            width: "976px",
            height: "112px",
            top: "712px",
            left: "232px",
            background:
              "radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)",
            filter: "blur(60px)",
          }}
        />

        <div
          className="md:hidden absolute opacity-60 transform rotate-180 z-10"
          style={{
            width: "100%",
            height: "80px",
            bottom: "0px",
            left: "0px",
            background:
              "radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)",
            filter: "blur(40px)",
          }}
        />
      </div>
    </div>
  );
}
