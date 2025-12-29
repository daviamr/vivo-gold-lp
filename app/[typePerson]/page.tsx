import HeroTop from '../../components/hero/HeroTop'
import HeroMid from '../../components/hero/HeroMid'
import NormalPlans from '../../components/menu-plans/NormalPlans'
import Accordion from '../../components/accordion/Accordion'

async function Index({ params }: PersonProp) {
  const { typePerson } = await params
  return (
    <div>
      <HeroTop />

      <div className='container m-auto px-4'>
        <h1 className='my-8 text-3xl max-w-160 font-light'>O plano com Fibra + Pós perfeito para você já está no seu carrinho</h1>

        <NormalPlans />

        <div className='mt-4 mb-12'>
          <Accordion title='Accordion 1' desc='Content 1' />
          <Accordion title='Accordion 2' desc='Content 2' />
        </div>
      </div>

      <HeroMid />

      <div className='container m-auto px-4'>
        <div className='my-8 mt-12'>
          <p className='uppercase font-bold'>Lorem Ipsum + Ipsum</p>
          <h2 className='text-3xl max-w-160 font-light'>O plano com Fibra + Pós perfeito para você já está no seu carrinho</h2>
        </div>
      </div>


    </div>
  )
}

type PersonProp = {
  params: Promise<{ typePerson: string }>
}

export default Index