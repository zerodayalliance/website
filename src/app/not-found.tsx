import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {

  return (
    <div className="min-h-screen relative overflow-hidden figma-gradient">
      {/* Top layout element - visible gradient with smooth blending */}
      <div className="absolute opacity-100 transform rotate-180 z-[1]"
           style={{
             width: '799px',
             height: '566px',
             top: '-414px',
             left: '321px',
             background: 'radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)',
             filter: 'blur(40px)',
             mixBlendMode: 'overlay'
           }}>
      </div>

      {/* Mobile top gradient - smaller and repositioned for mobile */}
      <div className="absolute md:hidden opacity-100 transform rotate-180 z-[1]"
           style={{
             width: '400px',
             height: '300px',
             top: '-200px',
             left: '50%',
             marginLeft: '-200px',
             background: 'radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)',
             filter: 'blur(30px)',
             mixBlendMode: 'overlay'
           }}>
      </div>

      {/* Animated background effects */}
      <div className="absolute inset-0 z-0">
        {/* Subtle red glow effects */}
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-red-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-16 gap-2 h-full">
            {[...Array(256)].map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>


      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col h-screen">
        {/* Header with logo */}
        <header>
          {/* Desktop logo */}
          <div className="hidden md:block absolute"
               style={{
                 top: '80px',
                 left: '120px',
                 width: '150px',
                 height: '58px',
                 opacity: 1
               }}>
            <Image
              src="/assets/svg/zeroday-logo.png"
              alt="ZeroDay Alliance Logo"
              width={150}
              height={58}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Mobile logo */}
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

        {/* Main content area */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 lg:px-12">
          {/* Desktop Left side content */}
          <div className="hidden lg:block flex-1 max-w-3xl">
            {/* Desktop Main heading */}
            <div className="mb-6">
              <h1 className="font-iceberg font-normal capitalize mb-2"
                  style={{
                    width: '700px',
                    height: '240px',
                    position: 'absolute',
                    top: '200px',
                    left: '120px',
                    fontSize: '120px',
                    fontWeight: 400,
                    lineHeight: '115px',
                    letterSpacing: '0%',
                    opacity: 1,
                    textTransform: 'capitalize'
                  }}>
                <span className="text-white">Hide &</span> <br />
                <span className="dark:text-quaternary text-hero">Seek Time!</span>
              </h1>
            </div>

            {/* Desktop Subtext */}
            <p className="font-encode-sans dark:text-gray-300 text-gray-500 mb-8"
               style={{
                 width: '500px',
                 height: '60px',
                 position: 'absolute',
                 top: '420px',
                 left: '120px',
                 fontSize: '22px',
                 fontWeight: 300,
                 lineHeight: '30px',
                 letterSpacing: '0%',
                 opacity: 1,
                 verticalAlign: 'middle'
               }}>
              Even we can't find this page. Come back later while we
              keep searching for it.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center justify-center w-full min-h-screen px-6 py-8 pt-24">
            <div className="flex flex-col items-center text-center max-w-sm w-full space-y-8">

              {/* Mobile Main heading */}
              <div className="space-y-4 mt-4">
                <h1 className="font-iceberg font-normal capitalize text-5xl sm:text-6xl leading-tight">
                  <span className="text-white block">Hide &</span>
                  <span className="dark:text-quaternary text-hero block">Seek Time!</span>
                </h1>
              </div>

              {/* Mobile SVG */}
              <div className="flex items-center justify-center py-4">
                <Image
                  src="/assets/svg/page-not-found.svg"
                  alt="Page Not Found"
                  width={280}
                  height={360}
                  className="opacity-100 w-auto h-auto max-w-[280px]"
                />
              </div>

              {/* Mobile Subtext */}
              <p className="font-encode-sans dark:text-gray-300 text-gray-400 text-lg leading-relaxed max-w-xs">
                Even we can't find this page. Come back later while we keep searching for it.
              </p>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link href="/">
                  <button className="group relative bg-gradient-to-r from-gray-700 to-gray-800
                                   border border-gray-600 text-white font-semibold text-sm
                                   hover:from-gray-600 hover:to-gray-700 hover:border-gray-500
                                   transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25
                                   transform hover:scale-105 tracking-wide px-8 py-3 rounded-full
                                   backdrop-blur-[50px]">
                    <span className="relative z-10">GO BACK TO HOME</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Right side - SVG Image and Button */}
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

              {/* Desktop CTA Button */}
              <Link href="/">
                <button className="group relative bg-gradient-to-r from-gray-700 to-gray-800
                                 border border-gray-600 text-white font-semibold text-sm
                                 hover:from-gray-600 hover:to-gray-700 hover:border-gray-500
                                 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25
                                 transform hover:scale-105 tracking-wide"
                        style={{
                          width: '180px',
                          height: '45px',
                          borderRadius: '100px',
                          paddingTop: '10px',
                          paddingRight: '12px',
                          paddingBottom: '12px',
                          paddingLeft: '12px',
                          gap: '6px',
                          backdropFilter: 'blur(50px)'
                        }}>
                  <span className="relative z-10">GO BACK TO HOME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ borderRadius: '100px' }}></div>
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom decorative element - Desktop */}
        <div className="hidden md:block absolute opacity-80 transform rotate-180"
             style={{
               width: '976px',
               height: '112px',
               top: '712px',
               left: '232px',
               background: 'radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)',
               filter: 'blur(60px)'
             }}>
        </div>

        {/* Bottom decorative element - Mobile */}
        <div className="md:hidden absolute opacity-60 transform rotate-180"
             style={{
               width: '100%',
               height: '80px',
               bottom: '0px',
               left: '0px',
               background: 'radial-gradient(50% 50% at 50% 50%, #752626 0%, #321010 22.1%, #983131 72.6%)',
               filter: 'blur(40px)'
             }}>
        </div>
      </div>


    </div>
  );
}