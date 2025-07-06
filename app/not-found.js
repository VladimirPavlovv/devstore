import Link from "next/link";

export default function NotFound() {
    return (
        <div className="page-container">
            <h2>Page not found! (ㆆ_ㆆ)</h2>
            <h1>404</h1>
            <Link  href={'/'}>
                <button>Home</button>
            </Link>
        </div>
    )
}