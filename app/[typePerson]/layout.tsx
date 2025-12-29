import type { Metadata } from "next";
import Header from '../../components/layout/Header'
import ModalPfPj from '../../components/modal-pf-pj/ModalPfPj'
import DefaultLayout from '../../components/layout/DefaultLayout'

export const metadata: Metadata = {
  title: 'Vivo Fibra - A Melhor Internet Banda Larga da América Latina',
  description: 'A Melhor Internet Banda Larga da América Latina',
  icons: '/favicon.ico'
};

export default async function TypePersonLayout({ children, params }: PersonLayoutProps) {
  const { typePerson } = await params
  return (
    <>
      <ModalPfPj type={typePerson} />
      
      <Header typePerson={typePerson}/>
      <DefaultLayout>
        {children}
      </DefaultLayout>
    </>
  )
}

type PersonLayoutProps = {
  children: React.ReactNode,
  params: Promise<{ typePerson: string }>
}
