function Tag({ text }: { text: string }) {
    // bg-secondary/40 px-3 py-1 rounded-full text-base font-mono border border-secondary
    return(
        <span className="bg-primary/5 px-3 py-2 border border-secondary text-base rounded-xl hover:border-accent/70 transition">
            {text}
        </span>
    );
}

export default Tag;