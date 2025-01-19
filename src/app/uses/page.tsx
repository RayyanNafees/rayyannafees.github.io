import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function ToolsSection({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
	return (
		<Section {...props}>
			<ul className="space-y-16">{children}</ul>
		</Section>
	);
}

function Tool({
	title,
	href,
	children,
}: {
	title: string;
	href?: string;
	children: React.ReactNode;
}) {
	return (
		<Card as="li">
			<Card.Title as="h3" href={href}>
				{title}
			</Card.Title>
			<Card.Description>{children}</Card.Description>
		</Card>
	);
}

export const metadata = {
	title: "Uses",
	description: "Software I use, gadgets I love, and other things I recommend.",
};

export default function Uses() {
	return (
		<SimpleLayout
			title="Software I use, gadgets I love, and other things I recommend."
			intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
		>
			<div className="space-y-20">
				<ToolsSection title="Workstation">
					<Tool title="16” Dell Inspiron 3505, Ryzen 5, 16GB RAM (2021)">
						I was using an Intel-based i5 Lenovo prior to this and the
						difference is night and day. I’ve never heard the fans turn on a
						single time, even under the incredibly heavy loads I put it through
						with our various launch simulations.
					</Tool>
					{/* <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool> */}
				</ToolsSection>
				<ToolsSection title="Development tools">
					<Tool title="VScodium">
						A fork of the most popular IDE - VS code but without microsoft’s
						user tracking. Loved the fact that only OpenVSIX extensions are
						allowed, those that do not collect user data and keeps your profile
						anonymous
					</Tool>
					<Tool title="WaveTerm">
						Really loved the collection of features it provides, your File
						Explorer, Terminal, AI agent Task Manager and web browser all in one
						place ! Sometimes I don’t even open any other app but waveterm for
						developing
					</Tool>
					<Tool title="NuShell">
						Using a daily notes system instead of trying to keep things
						organized by topics has been super powerful for me. And with
						Reflect, it’s still easy for me to keep all of that stuff
						discoverable by topic even though all of my writing happens in the
						daily note.
					</Tool>
				</ToolsSection>
				<ToolsSection title="Design">
					<Tool title="Framer">
						I started using Framer as an easier Figma alternative, the UI looked
						so Simple to bootstrap design within minutes. But now it has became
						a full-fledged CMS featuring REST calls , and most times, it’s able
						to produce working websites with just the design!
					</Tool>
				</ToolsSection>
				<ToolsSection title="Productivity">
					<Tool title="Microsoft PowerToys">
						A powerful suite of utilities designed to enhance productivity. With
						features like PowerToys Run (which is basically RayCast but for Windows),
            it makes managing windows and automating repetitive tasks effortless. Though
						it’s not the latest application on the market, its reliability and
						speed have earned it a dedicated following.
					</Tool>

					<Tool title="Arc Browser">
						An innovative browser built with performance in mind, Arc Browser is
						designed to be lightweight and resource-efficient. Written in Rust,
						it introduces unique features such as a vertical tab panel,
						application pinning, and a streamlined UI that redefines how we
						interact with the web. It’s a game-changer for those looking for
						efficiency and modern browsing techniques.
					</Tool>

					<Tool title="Super Productivity">
						A minimal yet effective productivity tool that helps you stay
						focused by blocking distracting websites. Its simple interface
						allows you to track your tasks and set clear work intervals, making
						it easier to maintain focus and build momentum throughout the day.
					</Tool>

					<Tool title="Notion">
						A versatile tool for organizing your life. Notion excels in managing
						projects, tracking tasks, and scheduling meetings, all within an
						intuitive and customizable interface. It helps me balance my
						professional and personal life, ensuring that my calendar is
						efficient while reserving time for focused, deep work.
					</Tool>

					<Tool title="Val.town">
						A Developer Friendly platform for quick prototyping of backend or Frontend applications 
            and test their workings. Great for instantly deploying small scripts which also allows deploying larger
            performant ones. Makes the Feature development process really fast and easy, and allows for rapid prototyping 
            and testing new PoCs.
					</Tool>
				</ToolsSection>
			</div>
		</SimpleLayout>
	);
}
