import { ctm } from 'app/utils/style'

const ArrowIcon = ({ color }: { color: string }) => {
  return (
    <svg
      viewBox="0 0 46 16"
      height="8"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      id="arrow-horizontal"
      className={ctm(
        `-translate-x-2 ml-1 mb-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-primary-50-500`,
        color === 'primary'
          ? `fill-primary-500 dark:fill-primary-400`
          : 'fill-slate-500 dark:fill-slate-400'
      )}
    >
      <path
        transform="translate(30)"
        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
        data-name="Path 10"
        id="Path_10"
      ></path>
    </svg>
  )
}

export default ArrowIcon
