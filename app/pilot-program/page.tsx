import HeaderNav from "../components/HeaderNav"
import FooterNav from "../components/FooterNav"
import Showcase from "../components/Showcase"
import Link from "next/link"
import ButtonLink from "../components/ButtonLink"
import Image from "next/image"
import { Poppins, Orbitron } from "next/font/google"
import banner from "../../public/img/pilot/community.jpg"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
})

export const metadata = {
  title: "Tableland: Pilot Program",
  description:
    "The Pilot Program is here to support you with funding, technical mentors, public showcases, and more. The program is low-lift and high reward for any builder with a vision and dedication.",
}

export default function PilotProgram() {
  return (
    <main className={"min-h-screen " + poppins.className}>
      {/* header */}
      <HeaderNav />
      {/* <!-- hero --> */}
      <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/pilot/hero.jpg')]">
        <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
          <article className="mx-auto md:mx-[initial] prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
            <h1>The Pilot Program</h1>
            <p className="lead">
              Join the next pilot program season for access to exclusive
              mentorship, prizes, and a small group building on the cutting edge
              of the open web.
            </p>
            <p>
              Check out{" "}
              <Link
                href="https://youtube.com/playlist?list=PLAc0xDyQDZbo-PnGBbv1aBTVMVwd4qncL"
                target="blank"
              >
                the demos
              </Link>{" "}
              from Season 5.
            </p>
            <p>
              <ButtonLink
                href="https://hhueol4i6vp.typeform.com/pilot-program"
                target="_blank"
              >
                Apply now
              </ButtonLink>
            </p>
          </article>
        </div>
      </section>
      {/* <!-- benefits --> */}
      <section
        id="garage"
        className="w-full bg-darkgreen border-t-1 border-color-green"
      >
        <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <article className="mx-auto prose prose-normal !prose-invert prose-sm md:prose-md lg:prose-lg max-w-prose prose-img:rounded-lg prose-pre:text-xs font-light">
            <h1 className={orbitron.className}>Benefits</h1>
            <p>
              <Image
                src={banner}
                alt="Tableland Community"
                className="text-flow w-full"
              />
              The Pilot Program is here to support you with funding, technical
              mentors, public showcases, and more. The program is low-lift and
              high reward for any builder with a vision and dedication.
            </p>
            <h2>Connect and learn</h2>
            <p>
              You will receive mentoring from our genesis team and direct
              onboarding onto the Tableland stack. Every team will be granted a
              free Tableland Rig per project.
            </p>
            <h2>Access to Tableland Support</h2>
            <p>
              Access both funding and dedicated engineering support to help your
              project become real.
            </p>
            <h2>Build Fundable Prototypes</h2>
            <p>
              Create portfolio-worthy prototypes with the help of mentors and
              peers.
            </p>
            <h2>Marketing and PR</h2>
            <p>
              Including showcasing work outcomes to the Tableland community,
              inclusion in our private investor newsletter, and our social
              outlets.
            </p>
          </article>
        </div>
      </section>
      {/* showcase */}
      <Showcase
        href="https://hhueol4i6vp.typeform.com/pilot-program"
        classes="bg-green border-lightgreen"
      >
        Apply now
      </Showcase>
      {/* footer */}
      <FooterNav />
    </main>
  )
}
