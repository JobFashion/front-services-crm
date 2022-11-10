type Props = {
  text: string
  textColor?: string
  colorButton?: string
  iconRight?: string
  iconLeft?: string
  textSize?: string
  action?: () => void
  size?: string
}

export const Button = ({
  text,
  textColor,
  iconRight,
  iconLeft,
  textSize,
  colorButton,
  action,
  size,
}: Props) => {
  let sizeButton = ''
  switch (size) {
    case 'medium':
      sizeButton = 'w-32'
      break
    default:
      break
  }
  return (
    <button
      onClick={action}
      className={`flex justify-center gap-2 items-center text-white ${sizeButton} ${textSize} ${textColor} ${
        colorButton ? colorButton : 'bg-blup'
      }  rounded-lg py-3 px-4`}
    >
      {iconLeft && <img className={`w-5 h-5 flex items-center`} src={iconLeft} alt='' />}
      {text}
      {iconRight && <img className={`w-5 h-5 flex items-center`} src={iconRight} alt='' />}
    </button>
  )
}
