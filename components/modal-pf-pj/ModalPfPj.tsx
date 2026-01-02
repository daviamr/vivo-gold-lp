'use client'
import { useState } from 'react'
import DefaultModal from '../../components/default-modal/DefaultModal'
import FormPfPj from '../../components/form-pf-pj/FormPfPj'
import { Button } from '../ui/button'

function Index({ type }: ModalPfPjProps) {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [triggerrSubmit, setTriggerSubmit] = useState(false)
  console.log(type)
  return (
    <DefaultModal bgBlack={true} isOpen={isModalOpen}>
      <div className="w-full grid max-w-125 bg-default-purple rounded-sm lg:grid-cols-2 lg:flex-row lg:items-center lg:max-w-275">

        <div
          className="px-4 py-14">
          <p className='max-w-90 m-auto text-white text-[26px] text-center font-light lg:text-3xl lg:max-w-120'>Consulte os planos disponíveis para sua região</p>
        </div>

        <div className='bg-white p-8 font-light rounded-b-sm lg:rounded-b-none lg:rounded-br-sm lg:rounded-tr-sm lg:py-24'>
          <h1 className='text-xl mb-4 lg:text-2xl lg:font-normal lg:max-w-100'>Precisamos de alguns dados para continuar</h1>
          <FormPfPj onSubmit={triggerrSubmit} />
          <Button
            variant={'vivo'}
            onClick={() => {
              setIsModalOpen(false)
              setTriggerSubmit(true)
            }}
            className="w-full text-white text-1xl font-bold py-8 mt-8">
            Consultar Planos Vivo Fibra
          </Button>
        </div>

      </div>
    </DefaultModal>
  )
}

export default Index

type ModalPfPjProps = {
  type: any
}