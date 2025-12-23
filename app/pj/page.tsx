import DefaultLayout from '../../components/layout/DefaultLayout'
import ModalPfPj from '../../components/modal-pf-pj/ModalPfPj'

function Page() {
  const currrentPath = 'pj'

  return (
    <DefaultLayout>
      <ModalPfPj type={currrentPath}/>
    </DefaultLayout>
  )
}

export default Page