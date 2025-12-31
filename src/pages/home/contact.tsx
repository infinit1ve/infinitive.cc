function Contact() {
    return (
        <div id="contact" className="h-full w-full bg-bg flex items-center justify-center flex-col p-10 gap-6 text-center">
            <h2 className="font-title text-4xl">Get in touch</h2>
            <p>If you'd like to reach out, feel free to email me at <a className="text-primary hover:text-accent transition cursor-pointer" href="mailto:contact@infinitive.cc">contact@infinitive.cc</a> or connect with me on <a className="text-primary hover:text-accent transition cursor-pointer" href="https://www.linkedin.com/in/maksym-tarashchan/">LinkedIn</a>.</p>
        </div>
    );
}

export default Contact;