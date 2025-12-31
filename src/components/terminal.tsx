function Terminal() {
    return (
        <div className="bg-bg text-accent text-left text-base font-mono p-4 rounded-3xl outline-accent outline-2 pb-12">
            <p>$ echo "Welcome, traveller!"</p>
            <p>&gt; Welcome, traveller!</p>
            <p>$ npm run dev</p>
            <p>&gt; infinitive.cc@0.0.0 dev</p>
            <p>&gt; vite</p><br/>
            <p>&nbsp;&nbsp;VITE v7.3.0 ready in 190 ms</p>
            <p>&nbsp;&nbsp;Network: <a href="https://infinitive.cc">https://infinitive.cc</a></p>
        </div>
    );
}

export default Terminal;