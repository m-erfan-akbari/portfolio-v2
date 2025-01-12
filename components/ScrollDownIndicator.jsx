'use client'
export default function ScrollDownIndicator() {
  const scrollTo = (value) =>
    window.scroll({
      top: value,
      left: 0,
      behavior: 'smooth',
    })
  return (
    <button
      className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-center portrait:bottom-16 portrait:sm:bottom-72"
      onClick={() => scrollTo(window.innerHeight)}
    >
      <p className="animate-fade mb-2 text-sm text-gray-500 portrait:mb-10 portrait:text-4xl">
        Scroll Down
      </p>
      <div className="mx-auto h-4 w-4 transform animate-bounce border-b-2 border-l-2 border-gray-500 portrait:h-8 portrait:w-8"></div>
    </button>
  )
}
