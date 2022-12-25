import logo from 'assets/logo.svg'

type Props = {
    src: string
}

const Image = ({ src }: Props) => {
    return <img src={src} alt="Картинка" />
}
export default Image
