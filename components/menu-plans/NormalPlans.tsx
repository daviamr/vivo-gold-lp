'use client'

import { ChevronDown, Smartphone, Wifi } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

function Index({ typePerson }: MenuPlansProp) {
  const ICONS = {
    APPS: ['/icon-netflix.png', '/icon-netflix.png', '/icon-netflix.png'],
    TV: ['/icon-netflix.png', '/icon-netflix.png', '/icon-netflix.png', '/icon-netflix.png', '/icon-netflix.png'],
    COURTESY: ['/icon-netflix.png', '/icon-netflix.png']
  }
  const [menuOption, setMenuOption] = useState('vivoFibra')
  const mockedPlans = [
    {
      plan: 'Vivo Total Pro',
      fibra: '500 Mega',
      pos: '50',
      apps: false,
      tv: false,
      tel: false,
      price: 160
    },
    {
      plan: 'Vivo Total Ultra',
      fibra: '700 Mega',
      pos: '70',
      apps: true,
      tv: false,
      tel: false,
      price: 240
    },
    {
      plan: 'Vivo Total Ultra',
      fibra: '700 Mega',
      pos: '70',
      apps: true,
      tv: true,
      tel: false,
      price: 360
    },
    {
      plan: 'Personalize o seu Plano',
      fibra: '1 Giga',
      pos: '70',
      apps: true,
      tv: true,
      tel: true,
      price: 360
    }
  ]
  const [plans, setPlans] = useState(mockedPlans)
  const router = useRouter()

  const toggleCheck = (i: number, field: string, value: boolean) => {

    setPlans(prevPlans =>
      prevPlans.map((plan, index) => index === i ?
        { ...plan, [field]: value } : plan
      )
    )
  }

  const handleCheckout = (plan: typeof mockedPlans[0]) => {
    localStorage.setItem('selectedPlan', JSON.stringify(plan))
    router.push(`${typePerson}/checkout`)
  }

  return (
    <div id="card-section">
      <ul className="grid grid-cols-2 max-w-70 text-center cursor-pointer">
        <li
          className={`border-b-3 ${(menuOption === 'vivoFibra' && 'border-default-purple')}`}
          onClick={() => setMenuOption('vivoFibra')}>
          Vivo Fibra
        </li>
      </ul>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {plans.map((plan, index) => (
          <div className="max-w-[378px]" key={index}>

            <div className="p-4">
              <span className="text-sm">{plan.plan}</span>
              <div className="flex gap-2 items-baseline mt-1 pb-4 border-b">
                <Wifi />
                <div>
                  <p className="flex items-center gap-2 text-3xl">{plan.fibra}</p>
                  <p className="text-sm">de Vivo Fibra com Wi-Fi 6</p>
                </div>
              </div>

              <div className="flex gap-2 items-baseline mt-1 pb-4 border-b">
                <Smartphone />
                <div>
                  <p className="flex items-center gap-2 text-3xl">{plan.pos} MB</p>
                  <p className="text-sm">de Vivo Pós</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-t-sm">
              <span className="text-sm font-bold opacity-75">Inclua Pacote Apps</span>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  {ICONS.APPS.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon}
                      alt={`app`}
                      width={32}
                      height={32}
                      className="rounded-full" />
                  ))}
                </div>

                <Switch
                  checked={plan.apps}
                  onCheckedChange={(value) => toggleCheck(index, 'apps', value)} />
              </div>
            </div>

            <div className="p-4 bg-white mt-1">
              <span className="text-sm font-bold opacity-75">Inclua TV na sua assinatura</span>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  {ICONS.TV.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon}
                      alt={`app`}
                      width={32}
                      height={32}
                      className="rounded-full" />
                  ))}
                </div>

                <Switch
                  checked={plan.tv}
                  onCheckedChange={(value) => toggleCheck(index, 'tv', value)} />
              </div>
            </div>

            <div className="p-4 bg-white mt-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold opacity-75">Telefone fixo</p>
                <Switch />
              </div>
            </div>

            <div className="p-4 bg-white rounded-b-sm mt-1">
              <span className="text-sm font-bold opacity-75">6 meses de Cortesia</span>
              <div className="flex items-center gap-2 mt-2">
                {ICONS.COURTESY.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt={`app`}
                    width={32}
                    height={32}
                    className="rounded-sm" />
                ))}
              </div>
            </div>

            <div className="px-4 py-8">
              <p className="text-2xl pb-8">
                R$ {plan.price} /mês
              </p>

              <Button
                variant={'vivoPlans'}
                className="w-full rounded-sm p-6 text-white tracking-wider"
                onClick={() => handleCheckout(plan)}>
                Consultar Fibra+Pós
              </Button>

              <span className="flex justify-center items-center gap-2 pt-8 text-sm cursor-pointer">
                Mais detalhes <ChevronDown size={16} />
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

type MenuPlansProp = {
  typePerson?: string
}

export default Index