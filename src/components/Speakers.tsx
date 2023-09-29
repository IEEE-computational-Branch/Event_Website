import SpeakerCard from "./Speakers/SpeakerCard";

function Speakers() {
	return (
		<div className="bg-slate-900">
			<div className="w-full max-w-7xl mx-auto flex flex-col px-4 xl:px-0 pb-20 max-md:pb-12">
				<h1 className="font-display text-5xl max-md:text-4xl tracking-wider pt-20 max-md:pt-12 bg-slate-900/50 backdrop-blur-lg pb-8 sticky top-[61px]">
					Speakers
				</h1>
				<div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
					<SpeakerCard
						name="Elliot Alderson"
						desc="Cybersecurity Specialist, AllSafe Cybersecurity"
						img="https://64.media.tumblr.com/58d08655f4cc29eec322ec9943afe389/tumblr_nu5pv7v6w41up609jo5_400.png"
						linkedin="https://linkedin.in/"
						github="https://github.com/"
						x="https://x.com/"
					/>
					<SpeakerCard
						name="Tyrell Wellick"
						desc="CTO, E Corp"
						img="https://pbs.twimg.com/profile_images/711304230339002369/TMeiulxb_400x400.jpg"
						linkedin="https://linkedin.in/"
						x="https://x.com/"
					/>
					<SpeakerCard
						name="Bertram Gilfoyle"
						desc="Systems Engineer, Pied Piper"
						img="https://gcdnb.pbrd.co/images/mcq2HEjrFD1N.png?o=1"
						linkedin="https://linkedin.in/"
						github="https://github.com/"
						x="https://x.com/"
					/>
					<SpeakerCard
						name="Maurice Moss"
						desc="IT Support, Reynholm Industries"
						img="https://64.media.tumblr.com/2e4c7abbfd02ac5b90afe79ec2b42ee7/tumblr_inline_nyhvfjFIxT1r8mwrd_400.jpg"
						linkedin="https://linkedin.in/"
						github="https://github.com/"
						x="https://x.com/"
					/>
				</div>
			</div>
		</div>
	);
}

export default Speakers;
