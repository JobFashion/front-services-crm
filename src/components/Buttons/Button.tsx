import { Link } from 'react-router-dom'

type Props = {
  text: string
  textColor?: string
  colorButton?: string
  iconRight?: string
  iconLeft?: string
  textSize?: string
  redirect?: string
  size?: string
}

export const Button = ({
  text,
  textColor,
  iconRight,
  iconLeft,
  textSize,
  colorButton,
  redirect,
  size,
}: Props) => {
  let sizeButton = ''
  switch (size) {
    case 'md':
      sizeButton = 'w-32'
      break
    case '2xl':
      sizeButton = 'w-60'
      break
    default:
      sizeButton = 'w-32'
      break
  }
  return (
    <Link
      to={`/${redirect ? redirect : '/'}`}
      className={`flex justify-center gap-2 items-center text-white ${sizeButton} ${textSize} ${textColor} ${
        colorButton && colorButton
      }  rounded-lg py-3 px-4`}
    >
      {iconLeft && <img className={`w-5 h-5 flex items-center`} src={iconLeft} alt='' />}
      {text}
      {iconRight && <img className={`w-5 h-5 flex items-center`} src={iconRight} alt='' />}
    </Link>
  )
}
