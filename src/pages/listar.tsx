import Image from "next/image";
import { Inter } from "next/font/google";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQuery } from "react-query";
import { getImoveis, postImoveis } from "@/requests";
import Link from "next/link";

const FormSchema = z.object({
	endereco: z.string().min(5, {
		message: "Endereço deve ter pelo menos 5 caracteres.",
	}),
	preco: z.number(),
	tipo: z.enum(["Venda", "Aluguel"]),
});

export function PropertyForm() {
	const { mutateAsync, isLoading } = useMutation("createImovel", postImoveis);

	const { toast } = useToast();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		// Execute the mutation
		const result = await mutateAsync(data);

		// Check if the mutation was successful
		// if (result.isSuccess) {
		// 	toast({
		// 		title: "Property details saved successfully!",
		// 		status: "success",
		// 	});
		// } else {
		// 	toast({
		// 		title: "Error saving property details.",
		// 		description: result.error ? result.error.message : "An unknown error occurred.",
		// 		status: "error",
		// 	});
		// }

		// Display the data as before
		toast({
			title: "Você enviou os seguintes valores:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className=" w-11/12 md:w-2/3 space-y-6 bg-white p-10 rounded-md shadow-lg">
				<FormField
					control={form.control}
					name="endereco"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Endereço</FormLabel>
							<FormControl>
								<Input placeholder="Rua Exemplo, 123" {...field} />
							</FormControl>
							<FormDescription>Informe o endereço completo.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="preco"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Preço</FormLabel>
							<FormControl>
								<Input type="number" placeholder="R$1000,00" onChange={(e) => field.onChange(e.target.valueAsNumber)} onBlur={field.onBlur} ref={field.ref} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="tipo"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tipo</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Selecione uma opção" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Venda">Para Venda</SelectItem>
									<SelectItem value="Aluguel">Para Aluguel</SelectItem>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<Button type="submit">Enviar</Button>
			</form>
		</Form>
	);
}

export default function Home() {
	const { data } = useQuery("todos", getImoveis);
	return (
		<main className="w-full flex flex-col p-10 items-center bg-green-950 min-h-screen gap-5">
			<Image alt="Zambas inc" height={150} width={150} src={"/zambas.png"} className="rounded-full " />
			<PropertyForm />
			<Button asChild variant={"secondary"}>
				<Link href={"/"}>Voltar para início</Link>
			</Button>
		</main>
	);
}
