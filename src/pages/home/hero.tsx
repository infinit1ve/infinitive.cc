import PrimaryButton from "../../components/button_primary";
import Terminal from "../../components/terminal";

function Hero() {
    return (
        <section className="min-h-svh w-full overflow-hidden bg-linear-to-b from-bg to-secondary/30 flex items-center justify-center flex-col p-10 text-center md:flex-row md:text-left md:justify-between md:gap-12">
            <div className="mb-10 space-y-3 z-1">
                <h1 className="text-5xl font-title z-1">Hello, I'm Maksym</h1>
                <p className="z-1 text-2xl md:mb-6">A student exploring tech, coding, and creative projects</p>
                <PrimaryButton text="Contact" onClick={() => {
                    const projectsSection = document.getElementById("contact");
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                }} />
            </div>
            <Terminal />
        </section>
    );
}

export default Hero;