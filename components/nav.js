import styles from "./nav.module.css";
import Link from "next/link";
import { RiBlueskyFill } from "react-icons/ri";

function Nav() {
    return (
        <div className={styles.nav}>
            <div>
                <Link href="/" className={styles.link}>
                    Data and Service Design
                </Link>
            </div>
            {/* Making the list of the years 2024-25 and 2025-26*/}
            <div>
                Editions
                <span style={{ margin: "0 0.5rem" }}>|</span>
                <Link href="/syllabus/2024-25/">2024-25</Link>
                <span style={{ margin: "0 0.5rem" }}>-</span>
                <Link href="/syllabus/2025-26/">2025-26</Link>
            </div>
            <div>
                <Link href="https://bsky.app/profile/dataservicedesign.bsky.social" style={{ fontSize: "1.2rem" }} className={styles.link}>
                    <RiBlueskyFill />
                </Link>
            </div>
        </div>
    );
}

export default function Navigation() {
    return <Nav />;
}
