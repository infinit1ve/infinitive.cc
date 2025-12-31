type props = {
  title: string
  desc: string
  url: string
  prettyUrl: string
}


function ProjectListing( {title, desc, url, prettyUrl} : props ) {
	return (
		<a href={url} className="bg-primary/5 px-4 py-3 border border-secondary text-base rounded-xl">
			<div className="flex justify-between items-center mb-2">
				<h3 className="font-satoshi text-2xl">{title}</h3>
				<p>{prettyUrl}</p>
			</div>
			<div className="text-left">
				<p>{desc}</p>
			</div>
		</a>
	);
}

export default ProjectListing;