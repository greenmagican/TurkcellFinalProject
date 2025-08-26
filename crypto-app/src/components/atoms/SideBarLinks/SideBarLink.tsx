import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface SideBarLinkProps {
    href: string,
    src: string,
    alt: string,
    text: string,
    background: string
    shape?: string
    color: string,



}

const SideBarLink: React.FC<SideBarLinkProps> = ({ src, alt, href, text, background, shape, color }) => {
    return (
        <Link href={href}>
            <div className={`home-link ${background} ${shape}  d-flex align-items-center p-2`}>
                <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                />

                <p className={`mb-0 ${color} fw-bold ms-2`}>{text}</p>
            </div></Link>
    )
}

export default SideBarLink