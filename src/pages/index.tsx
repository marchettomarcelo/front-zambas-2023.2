/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YmCMAflBdC1
 */

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
	return (
		<div className="flex flex-col min-h-[100vh]">
			<header className="relative h-[600px] bg-opacity-50 bg-black">
				<div className="flex justify-center pt-10 pb-16">
					<Image alt="zambas" height={200} width={200} src={"/zambas.png"} className="rounded-full absolute z-30 " />
				</div>
				<Image
					alt="Fundo"
					className="absolute inset-0 object-cover w-full h-full backdrop-blur-md"
					height="600"
					src="/fundo.png"
					style={{
						aspectRatio: "1200/600",
						objectFit: "cover",
						backdropFilter: "blur(4px)",
					}}
					width="1200"
				/>

				<div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-bold backdrop-blur-md rounded-lg p-10 text-white sm:text-5xl md:text-6xl">Invista melhor com nosso Home Broker</h1>
					<p className="mt-4 backdrop-blur-md rounded-lg p-6 text-xl text-white sm:text-2xl">Oferecemos as melhores ferramentas e insights para ajudá-lo a tomar decisões de investimento informadas.</p>

					<div className="flex gap-2">
						<Button asChild className="mt-8 px-8 py-3 text-black font-semibold rounded-lg bg-slate-300 hover:bg-slate-200">
							<Link href={"/imoveis"}>Ver imóveis disponíveis</Link>
						</Button>
						<Button asChild className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-slate-200">
							<Link href={"/listar"}>Listar meu imóvel</Link>
						</Button>
					</div>
				</div>
			</header>

			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center">Principais Características</h2>
				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="flex flex-col items-center">
						<svg className=" w-12 h-12 text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<line x1="12" x2="12" y1="20" y2="10" />
							<line x1="18" x2="18" y1="20" y2="4" />
							<line x1="6" x2="6" y1="20" y2="16" />
						</svg>
						<h3 className="mt-4 text-xl font-semibold">Análise Avançada</h3>
						<p className="mt-2 text-gray-600">Obtenha insights detalhados sobre seus investimentos com nossa ferramenta de análise avançada.</p>
					</div>
					<div className="flex flex-col items-center">
						<svg className=" w-12 h-12 text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 6.1H3" />
							<path d="M21 12.1H3" />
							<path d="M15.1 18H3" />
						</svg>
						<h3 className="mt-4 text-xl font-semibold">Suporte 24/7</h3>
						<p className="mt-2 text-gray-600">Estamos aqui para ajudá-lo 24 horas por dia, 7 dias por semana, com qualquer dúvida ou problema que possa surgir.</p>
					</div>
					<div className="flex flex-col items-center">
						<svg className=" w-12 h-12 text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
							<path d="M7 11V7a5 5 0 0 1 10 0v4" />
						</svg>
						<h3 className="mt-4 text-xl font-semibold">Seguro e Confiável</h3>
						<p className="mt-2 text-gray-600">Sua segurança é nossa prioridade. Invista com confiança sabendo que seus dados estão seguros.</p>
					</div>
				</div>
			</section>
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-300">
				<h2 className="text-3xl font-bold text-center">O Que Nossos Clientes Dizem</h2>
				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="flex flex-col items-center text-center">
						<Image
							alt="Depoimento 1"
							className="w-20 h-20 rounded-full"
							height="100"
							src="/cara.png"
							style={{
								aspectRatio: "100/100",
								objectFit: "cover",
							}}
							width="100"
						/>
						<h3 className="mt-4 text-lg font-semibold">João Silva</h3>
						<p className="mt-2 text-gray-600">"A melhor plataforma de home broker que eu já usei. É fácil de navegar e oferece insights úteis."</p>
					</div>
					<div className="flex flex-col items-center text-center">
						<img
							alt="Depoimento 2"
							className="w-20 h-20 rounded-full"
							height="100"
							src="/mina.png"
							style={{
								aspectRatio: "100/100",
								objectFit: "cover",
							}}
							width="100"
						/>
						<h3 className="mt-4 text-lg font-semibold">Maria Sousa</h3>
						<p className="mt-2 text-gray-600">"O atendimento ao cliente é incomparável. Eu recomendo muito esta plataforma."</p>
					</div>
					<div className="flex flex-col items-center text-center">
						<Image
							alt="Depoimento 3"
							className="w-20 h-20 rounded-full"
							height="100"
							src="/cara2.png"
							style={{
								aspectRatio: "100/100",
								objectFit: "cover",
							}}
							width="100"
						/>
						<h3 className="mt-4 text-lg font-semibold">Roberto Andrade</h3>
						<p className="mt-2 text-gray-600">"Uma plataforma fácil de usar com ótimos recursos. Tornou o investimento muito mais fácil."</p>
					</div>
				</div>
			</section>
			<footer className="bg-green-900">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center">
					<Link className="text-white text-lg font-semibold" href="#">
						<span>Home Broker</span>
					</Link>
					<div className="flex space-x-6">
						<Link className="text-base text-white hover:text-gray-300" href="#">
							Sobre Nós
						</Link>
						<Link className="text-base text-white hover:text-gray-300" href="#">
							Contato
						</Link>
						<Link className="text-base text-white hover:text-gray-300" href="#">
							Termos de Serviço
						</Link>
					</div>
				</nav>
			</footer>
		</div>
	);
}
