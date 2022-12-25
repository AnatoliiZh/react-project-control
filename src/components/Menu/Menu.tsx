import Button from '@mui/material/Button'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <Button className="menu_items">Home</Button>
                <Button className="menu_items">Fashion</Button>
                <Button className="menu_items">Health</Button>
                <Button className="menu_items">Lifestyle</Button>
                <Button className="menu_items">Travel</Button>
                <Button className="menu_items">Features</Button>
                <Button className="menu_items">Shop</Button>
            </div>
        </>
    )
}
export default Menu
