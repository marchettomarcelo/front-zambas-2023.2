import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { getImoveis } from "@/requests";
import Link from "next/link";

export default function Home() {
	const { data } = useQuery("todos", getImoveis);

	console.log(data);

	return (
		<main className="w-full flex flex-col p-10 items-center bg-green-950 min-h-screen gap-5">
			<Image alt="Zambas inc" height={150} width={150} src={"/zambas.png"} className="rounded-full " />
			<div className="flex flex-col gap-2 w-3/5">
				{data?.map((imovel: any, index: number) => {
					return (
						<div key={index} className="bg-white p-4 rounded-md shadow-lg flex justify-between">
							<div className=" flex flex-col">
								<p className="font-bold">{imovel.endereco}</p>
								{imovel.tipo}
							</div>
							<div className="font-bold flex flex-col justify-center items-center text-xl">R$ {imovel.preco}</div>
						</div>
					);
				})}
			</div>
			<Button asChild variant={"secondary"}>
				<Link href={"/"}>Voltar para início</Link>
			</Button>
		</main>
	);
}
