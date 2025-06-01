import React from 'react'
import Image from 'next/image'
const NavBarDropdown = () => {
    return (
        <div className="d-sm-none d-flex justify-content-between align-items-center p-2  text-white">
            <button
                className="btn btn-outline-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebar"
            >
                ☰
            </button>
            <Image
                src="/assets/header/frame.svg"
                alt="Logo"
                width={32}
                height={32}
            />
            <button
                className="navbar-toggler custom-toggler btn btn-outline-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="bi bi-search"></i>
            </button>
        </div>
    )
}

export default NavBarDropdown