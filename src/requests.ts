import axios from "axios";
import { z } from "zod";

const FormSchema = z.object({
	endereco: z.string().min(5, {
		message: "Endereço deve ter pelo menos 5 caracteres.",
	}),
	preco: z.number(),
	tipo: z.enum(["Venda", "Aluguel"]),
});

const data = [
	{
		identifier: "ID12345",
		endereco: "Rua das Flores, 123, São Paulo, SP",
		preco: 250000.5,
		tipo: "Venda",
	},
	{
		identifier: "ID12346",
		endereco: "Avenida do Sol, 456, Rio de Janeiro, RJ",
		preco: 320000.75,
		tipo: "Aluguel",
	},
	{
		identifier: "ID12347",
		endereco: "Praça da Estação, 789, Belo Horizonte, MG",
		preco: 150000.25,
		tipo: "Venda",
	},
	{
		identifier: "ID12348",
		endereco: "Rua das Pedras, 101, Porto Alegre, RS",
		preco: 280000.4,
		tipo: "Venda",
	},
	{
		identifier: "ID12349",
		endereco: "Alameda das Árvores, 202, Salvador, BA",
		preco: 210000.6,
		tipo: "Aluguel",
	},
];

function getImoveis() {
	return data;
}


// infer the type of the data variable

type FormSchemaType = z.infer<typeof FormSchema>;


async function postImoveis(params: FormSchemaType) {
    console.log("na funca", params);
	return "bom dia"
}

export { getImoveis, postImoveis };
