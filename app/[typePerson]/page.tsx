import HeroTop from '../../components/hero/HeroTop'
import HeroMid from '../../components/hero/HeroMid'
import NormalPlans from '../../components/menu-plans/NormalPlans'
import OtherPlans from '../../components/menu-plans/OtherPlans'
import Benefits from '../../components/benefits/Benefits'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

async function Index({ params }: PersonProp) {
  const { typePerson } = await params
  return (
    <div>
      <HeroTop />

      <div className='container m-auto px-4'>
        <h1 className='my-8 text-3xl max-w-160 font-light'>O plano com Fibra + Pós perfeito para você já está no seu carrinho</h1>

        <NormalPlans />

        <div className='grid grid-cols-1 mt-4 mb-12'>
          <div className='flex justify-beetween items-center border-y py-6 w-full'>
            <Link
              href={'https://vivo.com.br/para-voce/produtos-e-servicos/combos/vivo-total/vivo-total-sem-apps'}
              target='_blank'
              className='w-full flex justify-beetween'>
              Confira as ofertas Vivo Total sem apps inclusos
            </Link>
            <ChevronRight size={16} />
          </div>
          <div className='flex justify-beetween items-center border-b py-6 w-full'>
            <Link
              href={'https://vivo.com.br/para-voce/produtos-e-servicos/para-casa/regulamentos'}
              target='_blank'
              className='w-full flex justify-beetween'>
              Mais informações sobre as Ofertas
            </Link>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      <HeroMid />

      <div className='container m-auto px-4'>
        <div className='my-8 mt-12'>
          <p className='uppercase font-bold'>Lorem Ipsum + Ipsum</p>
          <h2 className='text-3xl max-w-160 font-light'>O plano com Fibra + Pós perfeito para você já está no seu carrinho</h2>
        </div>

        <OtherPlans />

      </div>

      <div className='container m-auto px-4 mb-12'>
        <div className='my-8 mt-12'>
          <p className='uppercase font-bold'>Vantagens Vivo Total</p>
          <h3 className='text-3xl max-w-160 font-light'>Quem é Vivo tem mais vantagens: bônus, apps e entretenimento</h3>
        </div>

        <Benefits />

      </div>



    </div>
  )
}

type PersonProp = {
  params: Promise<{ typePerson: string }>
}

export default Index