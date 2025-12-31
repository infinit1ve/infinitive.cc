function PrimaryButton( {text, onClick} : {text: string, onClick: () => void} ) {
	return (
		<button onClick={onClick} className="cursor-pointer bg-secondary/10 border-2 border-primary text-lg rounded-2xl px-3 py-0.5 hover:bg-primary/60 transition duration-100 md:text-xl md:px-4 md:py-1">
			{text}
		</button>
	);
}

export default PrimaryButton;