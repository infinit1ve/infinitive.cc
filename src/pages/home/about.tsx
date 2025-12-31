import Tag from "../../components/tag";
import RightArrow from "../../assets/images/arrow-right.tsx";

function About() {
    return (
        <section className="min-h-svh w-full bg-linear-to-t from-bg to-secondary/30 flex items-center justify-center flex-col p-10 gap-8 text-center md:flex-row md:text-left md:justify-between">
            <div className="flex items-center justify-center flex-col md:items-start">
                <h2 className="text-4xl font-title">Who am I?</h2>
                <p className="mt-6 text-xl leading-relaxed">
                    I&#8217;m Maksym (or Max), a student who loves all things tech — phones, PCs, servers, coding, you name it. I find it fascinating how any problem can be solved with the right tools, and I&#8217;m building my toolkit step by step every day.
                </p>
                <a href="" className="text-primary cursor-not-allowed mt-4 hover:text-accent transition">See my CV <RightArrow /></a>
            </div>
            <div className="flex w-full flex-wrap gap-2 align-center justify-center">
                <Tag text="HTML" />
                <Tag text="CSS" />
                <Tag text="JavaScript" />
                <Tag text="TypeScript" />
                <Tag text="React" />
                <Tag text="Git" />
                <Tag text="Linux" />
                <Tag text="Docker" />
            </div>
        </section>
    );
}

export default About;