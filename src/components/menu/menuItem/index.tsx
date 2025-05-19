import Link from "../../link"

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement>{
    href?: string
}

function MenuItem({children,href = "#"}: MenuItemProps) {
    return (
        <li>
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}

export default MenuItem
