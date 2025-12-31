function PrimaryButton( {text, onClick} : {text: string, onClick: () => void} ) {
	return (
		<button onClick={onClick} className="cursor-pointer bg-secondary/10 border-2 border-primary text-lg rounded-2xl px-3 py-0.5 hover:bg-primary/60 transition duration-100">
			{text}
		</button>
	);
}

export default PrimaryButton;