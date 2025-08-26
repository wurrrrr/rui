function Links() {
    return (
        <nav className="w-full flex justify-end space-x-4 mb-12">
            <a
                href="https://www.bilibili.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-lg shadow hover:bg-pink-200 transition"
            >
                B站
            </a>
            <a
                href="https://music.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-lg shadow hover:bg-blue-200 transition"
            >
                Apple Music
            </a>
        </nav>
    )
}

export default NavLinks
