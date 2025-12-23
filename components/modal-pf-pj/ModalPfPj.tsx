import DefaultModal from '../../components/default-modal/DefaultModal'
import FormPfPj from '../../components/form-pf-pj/FormPfPj'

function Index({ type }: { type: string }) {
  console.log(type)
  return (
    <DefaultModal bgBlack={true}>
      <div className="w-full flex flex-col max-w-125">

        <div
          className="w-full bg-default-purple p-4 py-14 rounded-t-sm">
          <p className='max-w-90 m-auto text-white text-[26px] text-center font-light'>Consulte os planos disponíveis para sua região</p>
        </div>

        <div className='bg-white p-8 font-light rounded-b-sm'>
          <h1 className='text-xl mb-4'>Precisamos de alguns dados para continuar</h1>
          <FormPfPj />
        </div>

      </div>
    </DefaultModal>
  )
}

export default Index