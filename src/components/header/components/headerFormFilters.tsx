import SelectGroup from "../../selector/SelectGroup"
import SelectOption from "../../selector/SelectorOption"
import { FaLocationDot } from "react-icons/fa6"

const cidades = [
    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
];

function HeaderFormFilters() {
    return (
        <form>
            <SelectGroup id="cidade" icon={<FaLocationDot/>}>
                <SelectOption label="Escolha sua cidade..." value=""/>
                {cidades.map((cidade)=>{
                    return <SelectOption label={cidade.nome} value={cidade.nome} key={cidade.id}/>
                })}
            </SelectGroup>
        </form>
    )
}

export default HeaderFormFilters
