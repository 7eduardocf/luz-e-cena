import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi"
import Botao from "../../button"

function HeaderActions() {
    return (
        <div>
            <Botao variant="icon">
                <HiOutlineShoppingCart/>
            </Botao>
            <Botao variant="icon">
                <HiOutlineUser/>
            </Botao>
        </div>
    )
}

export default HeaderActions
