import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Psypher1 Next Starter</title>
				<meta
					name="description"
					content="I prefer to work with my projects in a specific way. None of this shiny object stuff"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className="py-24 px-8 bg-slate-900 text-slate-100 min-h-screen ">
				<h1 className="text-5xl text-center font-bold">
					Psypher1&apos;s Nextjs Starter
				</h1>

				<section className="prose text-slate-100 prose-h2:text-slate-50 prose-code:text-sky-400 mt-16 w-1/2  mx-auto">
					<h2 className="text-3xl  font-semibold">It runs on:</h2>
					<ul className="prose-lg">
						<li>
							Nextjs <code>13.4.4</code> with{" "}
							<span className="font-bold">pages</span>
						</li>
						<li>
							TailwindCSS <code>3.3.0</code>
						</li>
						<li>
							Tailwind Typography <code>0.5.10</code>
						</li>
					</ul>
				</section>

				<section className="prose prose-invert w-1/2 mx-auto mt-12">
					<h2>Why this starter</h2>
					<ol>
						<li>Pages makes more sense to me</li>
						<li>
							I don&apos;t like the app router
							<ul>
								<li>
									I like clearly defined boundaries, which the app router throws
									that away.
								</li>
								<li>
									It&apos;s a shiny thing that&apos;s not ready. I am not a fan
									of new shiny things.
								</li>
							</ul>
						</li>
					</ol>
				</section>

				<section className="mt-16 prose prose-invert w-1/2  mx-auto">
					<h2>To start using run:</h2>
					<pre>
						npx create-next-app your-app-name -e
						https://github.com/Psypher1/nextjs13-tailwind-starter
					</pre>
				</section>
			</main>
		</>
	);
}
