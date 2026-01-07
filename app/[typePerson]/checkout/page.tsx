'use client'

import { useEffect, useState } from "react"
import CheckoutSteps from '../../../components/checkout-steps/CheckoutSteps'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { withMask } from "use-mask-input"
import { Button } from "@/components/ui/button"
import { Loader, Wifi } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function Index() {
  const [step, setStep] = useState<number>(1)
  const [selectedPlan, setSelectedPlan] = useState<PlanProps | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const isPF = (selectedPlan?.typePerson === 'pf')
  const STEPS = {
    1: {
      title: isPF ? 'Informe seus dados pessoais' :
        'Mais alguns passos para você aproveitar os serviços da Vivo na sua Empresa.',
      subtitle: isPF ? 'Dados pessoais' : 'Olá, vamos completar seu pedido!'
    },
    2: {
      title: 'Agora, você precisa completar o endereço',
      subtitle: 'Endereço de Instalação de Fibra'
    },
    3: {
      title: 'Defina a melhor data para instalação:',
      subtitle: 'Agendar instalação'
    },
    4: {
      title: 'Informe seus dados pessoais',
      subtitle: 'Dados pessoais'
    }
  } as const
  const dueDate = ['01', '10', '17', '21', '26']

  useEffect(() => {
    const storedPlan = localStorage.getItem('selectedPlan')
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan))
    }
    setIsLoaded(true)
  }, [])

  const onSubmit = () => {
    const nextStep = (step + 1)
    if (step < 4) {
      setStep(nextStep)
    } else {
      try {
        console.log('requisição')
      } catch (error: any) {
        console.log(error)
      }
    }
  }

  if (!isLoaded) return <div className="h-[calc(100vh-76px)] flex justify-center items-center"><Loader className="animate-spin" size={48} color="purple" /></div>

  return (
    <div className="container m-auto px-4 my-12">


      <div className="relative grid gap-4 lg:grid-cols-2">
        <div>
          <CheckoutSteps step={step} />
          {(step === 3) && (
            <div className="bg-white p-4 mt-12 rounded-sm shadow-xs">
              <p className="font-light mb-4">{!isPF ? 'Fatura e Instalação' : 'Dia de vencimento'}</p>
              <p className="text-2xl font-semibold text-gray-800">Qual é o dia de vencimento que melhor se adequa a sua necessidade?</p>

              <RadioGroup className="flex items-center justify-center my-2 border rounded-sm">
                {dueDate.map((date, i) => (
                  <div className="flex items-center justify-center border-x gap-2 grow p-2" key={i}>
                    <RadioGroupItem value={date} id={date} />
                    <Label htmlFor={date} className="text-2xl font-bold">{date}</Label>
                  </div>
                ))}
              </RadioGroup>
              {(step === 3 && !isPF) && (
                <p className="font-light mt-2 mb-4 text-sm">*Sua fatura é digital e será enviada por e-mail.</p>
              )}
            </div>
          )}
          <div className={`bg-white p-4 rounded-sm shadow-xs ${(step !== 3 ? 'mt-12' : 'mt-4')}`}>
            <div>
              <p className={`font-light mb-4 ${(step === 4 && !isPF) && 'hidden'}`}>{STEPS[step as keyof typeof STEPS].subtitle}</p>
              <p className={`text-2xl font-semibold text-gray-800 ${(step === 4 && !isPF) && 'hidden'}`}>{STEPS[step as keyof typeof STEPS].title}</p>
              {(step === 3 && !isPF) && (
                <p className="font-light mt-2 mb-4 text-sm">*Verifique se no local solicitado há restrição de horário para que nossa equipe faça a instalação.</p>
              )}
            </div>

            {(step === 1 && (
              <div className="mt-8">
                {(!isPF) && (
                  <>
                    <p className={`text-2xl font-semibold text-gray-800`}>1. Dados da Empresa</p>
                    <div className="grid gap-4 my-4">

                      <div>
                        <Label className="text-1xl font-normal mb-1" htmlFor="cnpj">CNPJ</Label>
                        <Input
                          id="cnpj"
                          type="text"
                          ref={withMask('99.999.999/9999-99', {
                            placeholder: '_',
                            showMaskOnHover: false,
                            showMaskOnFocus: false
                          })} />
                      </div>

                      <div>
                        <Label className="text-1xl font-normal mb-1" htmlFor="companyName">Razão Social</Label>
                        <Input id="companyName" type="text" />
                      </div>

                      <p className={`text-2xl font-semibold text-gray-800`}>2. Dados do Gestor</p>

                    </div>
                  </>
                )}
                <div
                  className={`grid gap-4 grid-cols-1 lg:grid-cols-2`}>

                  <div className={`${!isPF ? 'col-span-2' : ''}`}>
                    <Label className="text-1xl font-normal mb-1">Nome Completo</Label>
                    <Input type="text" />
                  </div>

                  <div className={`${!isPF ? 'col-span-2' : ''}`}>
                    <Label className="text-1xl font-normal mb-1">Celular</Label>
                    <Input
                      type="text"
                      ref={withMask('(99) 9 9999-9999', {
                        placeholder: '',
                        showMaskOnHover: false,
                        showMaskOnFocus: false
                      })} />
                  </div>

                  {(!isPF) && (
                    <span className="flex items-center gap-2 text-sm lg:col-span-2">
                      <Checkbox /> Tenho autorização legal para contratar em nome da empresa.
                    </span>
                  )}

                  <div className="lg:col-span-2">
                    <Label className="text-1xl font-normal mb-1">E-mail</Label>
                    <Input type="email" />
                    <span className="opacity-75 text-sm font-light">E-mail para envio da fatura digital.</span>
                  </div>

                  {(!isPF) && (
                    <div className="col-span-2">
                      <Label className="text-1xl font-normal mb-1" htmlFor="cpf">CPF</Label>
                      <Input
                        id="cpf"
                        type="text"
                        ref={withMask('999.999.999-99', {
                          placeholder: '_',
                          showMaskOnHover: false,
                          showMaskOnFocus: false
                        })} />
                    </div>
                  )}

                </div>
              </div>
            ))}

            {(step === 2 && (
              <div className="mt-8">
                <div className="grid gap-4 lg:grid-cols-2">

                  <div>
                    <Label className="text-1xl font-normal mb-1">CEP</Label>
                    <Input
                      type="text"
                      placeholder="CEP"
                      maxLength={9}
                      ref={withMask('99999-999', {
                        placeholder: '_',
                        showMaskOnHover: false,
                        showMaskOnFocus: false
                      })} />
                  </div>

                  <div>
                    <Label className="text-1xl font-normal mb-1" htmlFor="number">Número</Label>
                    <Input type="text" id="number" />
                  </div>

                  <span className="flex items-center gap-2 text-sm lg:col-span-2">
                    <Checkbox /> Quero informar quadra e lote
                  </span>

                  <div className="lg:col-span-2">
                    <Label className="text-1xl font-normal mb-1" htmlFor="address">Endereço</Label>
                    <Input type="text" id="address" />
                  </div>

                  <div className="grid gap-4 lg:col-span-2 lg:grid-cols-3">
                    <div>
                      <Label className="text-1xl font-normal mb-1" htmlFor="neighborhood">Bairro</Label>
                      <Input type="text" id="neighborhood" />
                    </div>

                    <div>
                      <Label className="text-1xl font-normal mb-1" htmlFor="city">Cidade</Label>
                      <Input type="text" id="city" />
                    </div>

                    <div>
                      <Label className="text-1xl font-normal mb-1" htmlFor="uf">Estado</Label>
                      <Input type="text" id="uf" />
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-2xl">
                      {(isPF) ?
                        'Você mora em:' :
                        'Endereço para instalação:'}
                    </p>
                    <RadioGroup className="flex items-center gap-4 px-4 my-2 lg:px-0">
                      <div className="flex items-center gap-2 lg:ml-4">
                        <RadioGroupItem value="building" id="building" />
                        <Label htmlFor="building" className="font-light text-1xl">Edifício</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="house" id="house" />
                        <Label htmlFor="house" className="font-light text-1xl">Casa</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-1xl font-normal mb-1">Complemento completo</Label>
                    <Input type="text" placeholder="Ex: Apto 202, Bloco B" />
                    <span className="opacity-75 text-sm font-light">Opcional</span>
                  </div>

                  <div>
                    <Label className="text-1xl font-normal mb-1">Ponto de Referência</Label>
                    <Input type="text" placeholder="Ex: Próximo ao Mercado" />
                    <span className="opacity-75 text-sm font-light">Opcional</span>
                  </div>

                </div>
              </div>
            ))}

            {(step === 3 && (
              <div className="mt-8">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="font-light mb-4">1&ordf; opção</p>
                    <Label className="text-1xl font-normal mb-1" htmlFor="date">Data</Label>
                    <Select>
                      <SelectTrigger id="date" className="w-full">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data1">
                          data1
                        </SelectItem>
                        <SelectItem value="data2">
                          data2
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="mt-4">
                      <Label className="text-1xl font-normal mb-1" htmlFor="period">Período</Label>
                      <Select>
                        <SelectTrigger id="period" className="w-full">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Manhã
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Tarde
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                  </div>

                  <div>
                    <p className="font-light mb-4">2&ordf; opção</p>
                    <Label className="text-1xl font-normal mb-1" htmlFor="date">Data</Label>
                    <Select>
                      <SelectTrigger id="date" className="w-full">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data1">
                          data1
                        </SelectItem>
                        <SelectItem value="data2">
                          data2
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="mt-4">
                      <Label className="text-1xl font-normal mb-1" htmlFor="period">Período</Label>
                      <Select>
                        <SelectTrigger id="period" className="w-full">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Manhã
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Tarde
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {(step === 4 && (
              <div className="mt-8">

                {(!isPF) && (
                  <div className="grid border-b pb-8 mb-6">
                    <p className="text-xl font-semibold text-gray-800">Você já possui um telefone fixo e gostaria de fazer a portabilidade?</p>

                    <div className="grid my-4 gap-4">

                      <div className="border border-default-purple w-max">
                        <button
                          className="border-r border-default-purple p-2 px-4 cursor-pointer text-default-purple">
                          Sim
                        </button>
                        <button
                          className="border-r p-2 px-4 cursor-pointer text-default-purple">
                          Não
                        </button>
                      </div>

                      <div>
                        <Label className="text-1xl font-normal mb-1" htmlFor="portabiltyNumber">Número a ser portado:</Label>
                        <Input
                          id="portabiltyNumber"
                          type="text"
                          placeholder="(00) 0 0000-0000"
                          ref={withMask('(99) 9 9999-9999', {
                            placeholder: '(00) 0 0000-0000',
                            showMaskOnHover: false,
                            showMaskOnFocus: false
                          })} />
                      </div>

                    </div>

                    <p className="text-xl font-semibold text-gray-800">Deseja contratar um IP fixo</p>

                    <div className="border border-default-purple w-max mt-4">
                      <button
                        className="border-r border-default-purple p-2 px-4 cursor-pointer text-default-purple">
                        Sim
                      </button>
                      <button
                        className="border-r p-2 px-4 cursor-pointer text-default-purple">
                        Não
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid gap-4 lg:grid-cols-2">

                  {(isPF) && (
                    <>
                      <div>
                        <Label className="text-1xl font-normal mb-1" htmlFor="cpf">CPF</Label>
                        <Input
                          id="cpf"
                          type="text"
                          ref={withMask('999.999.999-99', {
                            placeholder: '_',
                            showMaskOnHover: false,
                            showMaskOnFocus: false
                          })} />
                      </div>

                      <div>
                        <Label className="text-1xl font-normal mb-1" htmlFor="bornDate">Data de Nascimento</Label>
                        <Input
                          id="bornDate"
                          type="text"
                          placeholder="dd/mm/aaaa"
                          ref={withMask('99/99/9999', {
                            placeholder: '_',
                            showMaskOnHover: false,
                            showMaskOnFocus: false
                          })} />
                      </div>

                      <div className="lg:col-span-2">
                        <Label className="text-1xl font-normal mb-1" htmlFor="motherName">Nome Completo da Mãe</Label>
                        <Input type="text" id="motherName" />
                      </div>
                    </>
                  )}

                  <div className="lg:col-span-2">
                    <p className="text-2xl font-semibold text-gray-800 mb-4">Confirmação via SMS</p>
                    <p className="font-light text-[13px]"><span className="font-bold text-red-700">IMPORTANTE!</span> O SMS para realização da biometria será enviado ao número informado abaixo:</p>
                  </div>

                  <div className="lg:col-span-2">
                    <Label className="text-1xl font-normal mb-1" htmlFor="tel">Telefone Principal</Label>
                    <Input
                      id="tel"
                      type="text"
                      ref={withMask('(99) 9 9999-9999', {
                        placeholder: '',
                        showMaskOnHover: false,
                        showMaskOnFocus: false
                      })} />
                  </div>
                  <span className="text-[13px] font-light lg:col-span-2">Se desejar, adicione um segundo número de contato para garantir o recebimento da mensagem</span>

                  <div className="lg:col-span-2">
                    <Label className="text-1xl font-normal mb-1" htmlFor="tel2">Segundo número de contato (opcional)</Label>
                    <Input
                      id="tel2"
                      type="text"
                      ref={withMask('(99) 9 9999-9999', {
                        placeholder: '',
                        showMaskOnHover: false,
                        showMaskOnFocus: false
                      })} />
                  </div>
                  <span className="text-[13px] font-light lg:col-span-2">O benefício de cortesia da Amazon Prime é válido por 6 meses a partir da ativação da assinatura. Após esse período, será cobrado o valor de R$13,90/mês no plano anual.</span>

                  <div className="grid gap-2 px-2 mb-2 lg:col-span-2">

                    <div className="flex items-center gap-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="font-normal text-sm">Aceito os <span className="underline">Termos e Condições de Uso</span>.</label>
                    </div>

                    <div className="flex items-center gap-2">
                      <Checkbox id="acceptContact" />
                      <label htmlFor="acceptContact" className="font-normal text-sm">Aceito receber comunicações e ofertas da Vivo e Parceiros.</label>
                    </div>

                  </div>

                </div>
              </div>
            ))}

            <Button
              variant={'vivo'}
              className="w-full py-7 rounded-sm text-1xl text-white mt-4"
              onClick={() => onSubmit()}>
              Avançar
            </Button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-sm py-8 h-max shadow-xs">
          <p className="text-2xl font-semibold text-gray-800 mb-4">Meu plano</p>

          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 font-light"> <Wifi size={18} /> {selectedPlan?.plan} {selectedPlan?.fibra}</p>

            <p className="font-light">
              {selectedPlan?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/mês</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="flex items-center gap-2 font-light">Total</p>

            <p className="font-light">
              {selectedPlan?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/mês</p>
          </div>
        </div>

      </div>

    </div >
  )
}

export default Index

type PlanProps = {
  plan: string,
  fibra: string,
  pos: string,
  price: number,
  apps: boolean,
  tv: boolean,
  tel: boolean,
  typePerson?: string
}