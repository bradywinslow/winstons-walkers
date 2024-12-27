import Link from 'next/link'

export default function NavBar() {
    return (
        <div>
            <div>
                <Link href="/">
                    {/* Add logo */}
                    <p>Winston's Walkers</p>
                </Link>
                
            </div>
            <div>
                <ul>
                    <Link href="/"><li>About</li></Link>
                    <Link href="/services"><li>Services</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                    <Link href="/winstons-fosters"><li>Winston's Fosters</li></Link>
                </ul>
            </div>
        </div>
    )
    
}
