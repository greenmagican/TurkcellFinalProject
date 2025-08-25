import Link from "next/link"

interface FooterProps {
    links: string[]
}

const LinksList: React.FC<FooterProps> = ({ links }) => {
    return (
        <ul className="list-unstyled">
            {links.map((item: any, idx: number) => (
                <li key={idx} className="mb-2">
                    <Link href="#" className="text-decoration-none text-secondary">
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default LinksList
