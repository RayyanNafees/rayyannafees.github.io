import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpeg";

function SocialLink({
	className,
	href,
	children,
	icon: Icon,
}: {
	className?: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	children: React.ReactNode;
}) {
	return (
		<li className={clsx(className, "flex")}>
			<Link
				href={href}
				className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
			>
				<Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	);
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
			/>
		</svg>
	);
}

export const metadata: Metadata = {
	title: "About",
	description: "I’m Rayyan Nafees. I live in India, where I design the future.",
};

export default function About() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
				<div className="lg:pl-20">
					<div className="max-w-xs px-2.5 lg:max-w-none">
						<Image
							src={portraitImage}
							alt=""
							sizes="(min-width: 1024px) 32rem, 20rem"
							className="aspect-square rotate-3 rounded-2xl grayscale bg-zinc-100 object-cover dark:bg-zinc-800"
						/>
					</div>
				</div>
				<div className="lg:order-first lg:row-span-2">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
						I’m Rayyan Nafees. I live in India, where I design the
						future.
					</h1>
					<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
						<p>
							I’ve been passionate about building things for as long as I can
							remember, and I wrote my first program while still in school,
							eager to understand how technology could solve real-world
							problems. Over the years, this curiosity evolved into a full-stack
							web development career, where I’ve accumulated over 5 years of
							experience working on diverse projects.
						</p>
						<p>
							My interests extend beyond coding — I’m also a hobbyist game
							developer and a part-time freelancer. I enjoy tackling new
							challenges and am always looking for opportunities to apply my
							skills to innovative solutions, whether it’s in e-commerce,
							blockchain platforms, or social media applications.
						</p>
						<p>
							I’m also deeply passionate about scientific research and believe
							in the power of software to drive meaningful change. This led me
							to start the MyAMU club at AMU, where we develop software tools to
							improve student life on campus.
						</p>
						<p>
							Today, I continue to refine my skills as I work on a variety of
							exciting projects, from building SaaS templates to creating
							interlingual libraries. My goal is always to create impactful,
							user-friendly applications that make a difference in people’s
							lives.
						</p>
					</div>
				</div>
				<div className="lg:pl-20">
					<ul>
						<SocialLink
							href="https://twitter.com/NafeesRayyan"
							icon={TwitterIcon}
						>
							Follow on Twitter
						</SocialLink>
						<SocialLink
							href="https://instagram.com/_r_nh2"
							icon={InstagramIcon}
							className="mt-4"
						>
							Follow on Instagram
						</SocialLink>
						<SocialLink
							href="https://github.com/RayyanNafees"
							icon={GitHubIcon}
							className="mt-4"
						>
							Follow on GitHub
						</SocialLink>
						<SocialLink
							href="https://linkedin.com/in/rayyan-nafees"
							icon={LinkedInIcon}
							className="mt-4"
						>
							Follow on LinkedIn
						</SocialLink>
						<SocialLink
							href="mailto:nafees.rayyan@gmail.com"
							icon={MailIcon}
							className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
						>
							nafees.rayyan@gmail.com
						</SocialLink>
					</ul>
				</div>
			</div>
		</Container>
	);
}
