import { useState } from "react";
const styleProperties = {
    minWidth: "100%",
    minHeight: "50vh",
    color: "#fff",
    fontSize: "5rem",
    fontWeight: "bolder",
    padding: "2rem",
    textAlign: "center",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export default function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={{ backgroundColor: "#000" }}>
            <div style={{ ...styleProperties, backgroundColor: "#000" }}>A.Y. 2025-26 syllabus will be available soon</div>
            <div
                style={{
                    ...styleProperties,
                    backgroundColor: hoveredIndex === 1 ? "var(--var-dark)" : "var(--main)",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(1)}
                onClick={() => (window.location.href = "/syllabus/2024-25")}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <span>A.Y. 2024-25 syllabus</span>
            </div>
        </div>
    );
}
