import Link from "next/link"
import features from "@/lib/features"

export default function Features() {
  return (
    <div className="w-full grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {features.map(function (f, i) {
        return (
          <div key={i} className="rounded-lg mt-6">
            <div className="flex items-center mb-4">
              <span className="inline-block bg-white text-center rounded-full mr-4">
                <f.icon className="text-black text-3xl px-[0.25em]"></f.icon>
              </span>
              <h4 className="text-lg">{f.title}</h4>
            </div>
            <p className="text-sm text-white font-light mb-6">
              {f.description}
            </p>
            <p className="text-xs text-white font-light">
              <Link href={f.link} target="_blank">
                Learn more
              </Link>
            </p>
          </div>
        )
      })}
    </div>
  )
}
