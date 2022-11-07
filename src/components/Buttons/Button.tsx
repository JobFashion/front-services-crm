type Props = {
  text: string
  colorButton?: string
  iconRight?: string
  iconLeft?: string
  textSize?: string
  colorIconRight?: string
  colorIconLeft?: string
}

export const Button = ({
  text,
  iconRight,
  iconLeft,
  textSize,
  colorButton,
  colorIconLeft,
  colorIconRight,
}: Props) => {
  return (
    <div>
      <button
        className={`flex justify-center gap-2 items-center text-white font-semibold ${textSize} ${
          colorButton ? colorButton : 'bg-[#2F4DFE]'
        }  rounded-lg py-2 px-4`}
      >
        {iconLeft && (
          <img className={`w-5 h-5 ${colorIconLeft} flex items-center`} src={iconLeft} alt='' />
        )}
        {text}
        {iconRight && (
          <img className={`w-5 h-5 ${colorIconRight} flex items-center`} src={iconRight} alt='' />
        )}
      </button>
    </div>
  )
}
