import Logo from "../Logo"
import HeaderActions from "./components/headerActions"
import HeaderFormFilters from "./components/headerFormFilters"
import HeaderLinks from "./components/headerLinks"
import Headerlist from "./components/headerlist"
import HeaderListItem from "./components/HeaderListItem"

function Header() {
    return (
        <header>
            <Headerlist>
                <HeaderListItem>
                    <Logo src="/Logo e Favicon/Logo.png"/>
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks/>
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderFormFilters/>
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderActions/>
                </HeaderListItem>
            </Headerlist>
        </header>
    )
}

export default Header
