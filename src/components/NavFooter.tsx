import { Link } from "react-router-dom"
import { socials } from "../constants/socials"

function NavFooter() {
    return (
        <div className="flex flex-wrap justify-center gap-[1rem]">
            {socials.map((item) => (
                <Link
                    key={item.id}
                    to={item.url}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[2.5rem] h-[2.5rem] transition-transform hover:scale-110"
                >
                    <span
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className="w-full h-full text-[2.5rem]"
                    />
                </Link>
            ))}
        </div>
    )
}

export default NavFooter