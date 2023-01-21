import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/fashion">Fashion</MenuItem>
                <MenuItem to="/health">Health</MenuItem>
                <MenuItem to="/lifestyle">Lifestyle</MenuItem>
                <MenuItem to="/travel">Travel</MenuItem>
                <MenuItem to="/blog">Blog</MenuItem>
                <MenuItem to="/favorite">Favorite</MenuItem>
            </div>
        </>
    )
}
export default Menu
