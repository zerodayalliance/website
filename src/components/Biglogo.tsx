import * as React from "react"
const Biglogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={450}
    height={393}
    fill="none"
    viewBox="0 0 650 593"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M153.38 346.732h38.814c4.49 27.775 11.638 52.931 20.979 75.139l309.208-140.112v-.003l.093-.039 36.449-16.516 2.251.275.004-.001v.002l88.43 10.828-89.073 29.932c-8.942 176.669-97.47 286.415-205.361 286.415-99.389 0-182.347-93.132-201.794-245.92Zm60.198 76.097c29.895 70.325 81.88 110.803 141.007 110.803 83.853 0 153.343-81.411 165.829-213.913l-306.836 103.11Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#b)"
      fillRule="evenodd"
      d="M89.06 288.903C97.938 111.073 186.496 0 294.433 0c99.395 0 182.357 94.189 201.796 247.961h-39.892c-4.398-27.675-11.397-52.795-20.547-75.031L126.035 314.053v.002l-.077.033-35.273 16.07-2.252-.277L0 318.994l89.06-30.091Zm38.837-13.121c12.16-134.064 81.825-216.915 165.946-216.915 59.466 0 111.708 41.403 141.519 113.032L127.897 275.782Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={401.494}
        x2={401.494}
        y1={265.201}
        y2={592.652}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111" />
        <stop offset={1} stopColor="#777" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={248.114}
        x2={248.114}
        y1={0}
        y2={330.158}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#983131" />
        <stop offset={1} stopColor="#321010" />
      </linearGradient>
    </defs>
  </svg>
)
export default Biglogo
