import Image from "next/image"
import ButtonLink from "./ButtonLink"
import studio from "../../public/img/home/studio.png"

export default function Studio() {
  return (
    <section id="community" className="w-full bg-darkgreen text-white">
      <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
      <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
        <h1 className="w-full text-center text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">
          Tableland Studio
        </h1>
        <p className="mx-auto max-w-prose text-center text-sm lg:text-lg text-verylightgreen font-light mb-6 lg:mb-10">
          The Studio allows developers to focus on building and deploying
          decentralized applications without worrying about infrastructure and
          setup.
        </p>
        <Image
          src={studio}
          alt="Tableland Studio"
          className="mx-auto w-full xl:w-2/3 rounded-2xl mb-6 lg:mb-10"
        />
        <div className="text-center">
          <ButtonLink
            href="https://tableland.xyz/studio"
            target="_blank"
            className="text-neonblue hover:text-white bg-darkgreen border-2 border-green"
            event="Studio Waitlist Clicked"
            params={{ location: "studio" }}
          >
            Join waitlist
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
