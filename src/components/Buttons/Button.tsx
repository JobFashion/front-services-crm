type Props = {
  text: string
  colorButton?: string
  iconRight?: string
  iconLeft?: string
  colorIconRight?: string
  colorIconLeft?: string
}

export const Button = ({
  text,
  iconRight,
  iconLeft,
  colorButton,
  colorIconLeft,
  colorIconRight,
}: Props) => {
  return (
    <div>
      <button
        className={`flex justify-center gap-2 items-center text-white font-bold ${
          colorButton ? colorButton : 'bg-[#2F4DFE]'
        }  rounded-lg py-2 px-4`}
      >
        {iconLeft && <img className={`w-6 h-6 ${colorIconLeft}`} src={iconLeft} alt='' />}
        {text}
        {iconRight && <img className={`w-6 h-6 ${colorIconRight}`} src={iconRight} alt='' />}
      </button>
    </div>
  )
}
