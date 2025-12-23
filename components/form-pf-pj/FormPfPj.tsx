'use client'
import { withMask } from "use-mask-input"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Checkbox } from "../ui/checkbox"
import { useState } from "react"
import { Button } from "../ui/button"

function Index() {
  const [withoutNumber, setWithoutNumber] = useState(false)
  console.log(withoutNumber)
  return (
    <form className="px-2">
      <div className='flex flex-col gap-2 mb-8'>
        <h2 className='text-lg'>Buscar planos para:</h2>

        <RadioGroup defaultValue="Minha Casa">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="Minha Casa" id="r1" />
            <Label htmlFor="r1" className="font-light text-1xl">Minha Casa</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="Minha empresa" id="r2" />
            <Label htmlFor="r2" className="font-light text-1xl">Minha Empresa</Label>
          </div>
        </RadioGroup>
      </div>

      <span className="opacity-75 text-sm">* Digite o CEP de onde deseja instalar a Vivo Fibra.</span>
      <div className="flex flex-col gap-4 my-4 font-normal">
        <Input
          type="text"
          placeholder="CEP"
          maxLength={9}
          ref={withMask('99999-999', {
            placeholder: '_',
            showMaskOnHover: false,
            showMaskOnFocus: false
          })} />

        {withoutNumber ? (
          <Input type="text" placeholder="S/N" value="S/N" disabled />
        ) : (
          <Input
            type="text"
            placeholder="Número da Residência"
            maxLength={6}
            ref={withMask('999999', {
              placeholder: '',
              showMaskOnHover: false,
              showMaskOnFocus: false
            })} />
        )}
        <div className="flex items-center gap-3">
          <Checkbox id="withoutNumber" onClick={() => setWithoutNumber(prev => !prev)} />
          <Label htmlFor="withoutNumber" className="opacity-75">Sem número</Label>
        </div>
      </div>

      <Button variant={'vivo'} className="w-full text-white text-1xl font-bold py-8 mt-8">
        Consultar Planos Vivo Fibra
      </Button>
    </form>
  )
}

export default Index