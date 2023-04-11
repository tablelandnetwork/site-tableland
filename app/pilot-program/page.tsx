import HeaderNav from "../components/HeaderNav"
import FooterNav from "../components/FooterNav"
import Showcase from "../components/Showcase"
import Link from "next/link"
import ButtonLink from "../components/ButtonLink"
import Image from "next/image"
import { Poppins } from "next/font/google"
import banner from "../../public/img/pilot/community.jpg"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] })

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
      <div className="pilot-page">
        {/* <!-- hero --> */}
        <section className="page-hero">
          <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-36 md:pt-48 pb-4 sm:pb-24">
            <div className="flex items-center">
              <div className="xl:w-2/3">
                <h1 className="w-full h-auto font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter text-center md:text-left mb-4 md:mb-6 xl:mb-10">
                  Pilot Program
                </h1>
                <p className="text-xl md:text-2xl text-center md:text-left font-light mb-6 md:mb-10">
                  Join the next pilot program season for access to exclusive
                  mentorship, prizes, and a small group building on the cutting
                  edge of the open web.
                </p>
                <p className="text-xl md:text-2xl text-center md:text-left font-light mb-6 md:mb-10">
                  Check out{" "}
                  <Link
                    href="https://youtube.com/playlist?list=PLAc0xDyQDZbo-PnGBbv1aBTVMVwd4qncL"
                    target="blank"
                  >
                    the demos
                  </Link>{" "}
                  from Season 5.
                </p>
                <div className="md:inline-block text-center md:text-left mb-10">
                  <ButtonLink
                    href="https://hhueol4i6vp.typeform.com/pilot-program"
                    target="_blank"
                  >
                    Apply now
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="story">
          {/* <!-- benefits --> */}
          <section id="benefits">
            <div className="section-break"></div>
            <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-12 pb-24 sm:py-32">
              <h1 className="section-header font-Orbitron w-full h-auto text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10 lg:mb-18">
                Benefits
              </h1>
              <p className="text-xl lg:text-2xl font-light mb-10 lg:mb-18">
                <Image
                  src={banner}
                  alt="Tableland Community"
                  className="text-flow w-full"
                  priority={true}
                />
                The Pilot Program is here to support you with funding, technical
                mentors, public showcases, and more. The program is low-lift and
                high reward for any builder with a vision and dedication.
              </p>
              <h2 className="w-full h-auto text-xl lg:text-2xl xl:text-3xl mb-6">
                Connect and learn
              </h2>
              <p className="text-xl lg:text-2xl font-light mb-10 lg:mb-18">
                You will receive mentoring from our genesis team and direct
                onboarding onto the Tableland stack. Every team will be granted
                a free Tableland Rig per project.
              </p>
              <h2 className="w-full h-auto text-xl lg:text-2xl xl:text-3xl mb-6">
                Access to Tableland Support
              </h2>
              <p className="text-xl lg:text-2xl font-light mb-10 lg:mb-18">
                Access both funding and dedicated engineering support to help
                your project become real.
              </p>
              <h2 className="w-full h-auto text-xl lg:text-2xl xl:text-3xl mb-6">
                Build Fundable Prototypes
              </h2>
              <p className="text-xl lg:text-2xl font-light mb-10 lg:mb-18">
                Create portfolio-worthy prototypes with the help of mentors and
                peers.
              </p>
              <h2 className="w-full h-auto text-xl lg:text-2xl xl:text-3xl mb-6">
                Marketing and PR
              </h2>
              <p className="text-xl lg:text-2xl font-light mb-10 lg:mb-18">
                Including showcasing work outcomes to the Tableland community,
                inclusion in our private investor newsletter, and our social
                outlets.
              </p>
            </div>
          </section>
        </div>
      </div>
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
