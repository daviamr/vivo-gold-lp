import { Check, Smartphone, Wifi } from "lucide-react"
import { Button } from "../ui/button"

function Index() {
  return (
    <div className="py-12 text-white bg-default-purple lg:bg-[url('/background-vivo.jpg')] lg:bg-center">
      <div className="flex flex-col px-4 gap-4 container m-auto">
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-light">
          Vivo Total
        </h1>

        <div className="flex flex-col gap-2 text-1xl">
          <p className="flex items-center gap-2 text-2xl font-light lg:text-3xl lg:font-bold">
            <Wifi size={32} /> 500 MEGA Fibra {" "} +
          </p>
          <p className="flex items-center gap-2 text-2xl font-light lg:text-3xl lg:font-bold">
            <Smartphone size={32} /> 70 GB Pós
          </p>
          <p className="text-2xl font-light lg:text-3xl lg:font-bold">
            R$ 160,00/mês
          </p>

          <div className="my-4">
            <p className="flex items-center gap-2">
              <Check size={18} /> 6 meses de Amazon Prime de cortesia
            </p>
            <p className="flex items-center gap-2">
              <Check size={18} /> 6 meses de HBO Max
            </p>
            <p className="flex items-center gap-2">
              <Check size={18} /> 1 ano de IA Perplexity Pro Grátis
            </p>
          </div>
        </div>

        <Button className="p-7 px-12 text-[18px] w-max lg:px-24" variant={'vivoPlans'}>Contratar plano</Button>
      </div>
    </div>
  )
}

export default Index