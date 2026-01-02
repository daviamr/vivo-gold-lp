import Image from "next/image"

function Index() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div className="flex flex-col gap-4">
        <Image src="icon-amazon-prime.svg" alt="Benefit 1" width={100} height={100} />
        <p className="max-w-53">6 meses de Amazon Prime grátis com frete, filmes, séries, músicas e muito mais.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image src="icon-internet.svg" alt="Benefit 1" width={100} height={100} />
        <p className="max-w-53">Use internet no exterior com Vivo Travel em mais de 175 países.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image src="icon-vivo-tv.svg" alt="Benefit 1" width={100} height={100} />
        <p className="max-w-53">Adicione Vivo TV e assista filmes, séries, esportes e notícias na TV ou no celular.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image src="icon-gb.svg" alt="Benefit 1" width={100} height={100} />
        <p className="max-w-53">Ganhe 3 GB de bônus no Pós ao ativar Débito Automático no App Vivo.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image src="icon-vale-bonus.svg" alt="Benefit 1" width={100} height={100} />
        <p className="max-w-53">Receba até R$ 250 em Vale Bônus por mês.</p>
      </div>
    </div>
  )
}

export default Index