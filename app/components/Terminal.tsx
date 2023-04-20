"use client"

import Typed from "typed.js"
import { useEffect, useRef, useState } from "react"

type Props = {
  className?: string
}

type Lines = {
  val?: string[]
}

export default function Terminal({ className }: Props) {
  const [lines1, setLines1] = useState<Lines>({})
  const [lines2, setLines2] = useState<Lines>({})
  const [lines3, setLines3] = useState<Lines>({})
  const [lines4, setLines4] = useState<Lines>({})
  const cmd1r = useRef(null)
  const cmd2r = useRef(null)
  const cmd3r = useRef(null)
  const cmd4r = useRef(null)
  const cmd5r = useRef(null)

  useEffect(() => {
    const cmd1 =
      'tableland create "id INTEGER PRIMARY KEY, msg TEXT NOT NULL" --prefix hello | jq .meta.txn.name'
    const cmd2 =
      "tableland write \"GRANT INSERT ON hello_42170_7482 TO '0x9dc524eae39f7a37cb0324ccbe028bbf56b331e8'\" | jq .meta.txn.transactionHash"
    const cmd3 =
      "tableland write \"INSERT INTO hello_42170_7482(msg) VALUES('hello world')\" | jq .meta.txn.transactionHash"
    const cmd4 =
      'tableland read --format pretty "SELECT * FROM hello_42170_7482"'
    const output1 = ['"hello_42170_7482"']
    const output2 = [
      '"0xbc1867b4154d7f85bac02ae21b3b7bf66fdba22e5d5d4b98417773f44ac231e2"',
    ]
    const output3 = [
      '"0xd375d46625ba8de773b8f6de85c2b1030fb515b7a422ec38162c8429fd2a2b03"',
    ]
    const output4 = [
      "┌─────────┬────┬───────────────┐",
      "│\xA0(index)\xA0│\xA0id\xA0│\xA0\xA0\xA0\xA0\xA0\xA0msg\xA0\xA0\xA0\xA0\xA0\xA0│",
      "├─────────┼────┼───────────────┤",
      "│\xA0\xA0\xA0\xA00\xA0\xA0\xA0\xA0│\xA01\xA0\xA0│\xA0'hello world'\xA0│",
      "└─────────┴────┴───────────────┘",
    ]

    if (!lines1.val) {
      const typed = new Typed(cmd1r.current, {
        strings: [cmd1],
        typeSpeed: 10,
        showCursor: false,
        onComplete: function () {
          typed.stop()
          setLines1({ val: output1 })
        },
      })
    } else if (!lines2.val) {
      const typed = new Typed(cmd2r.current, {
        strings: [cmd2],
        typeSpeed: 10,
        showCursor: false,
        onComplete: function () {
          typed.stop()
          setLines2({ val: output2 })
        },
      })
    } else if (!lines3.val) {
      const typed = new Typed(cmd3r.current, {
        strings: [cmd3],
        typeSpeed: 10,
        showCursor: false,
        onComplete: function () {
          typed.stop()
          setLines3({ val: output3 })
        },
      })
    } else if (!lines4.val) {
      const typed = new Typed(cmd4r.current, {
        strings: [cmd4],
        typeSpeed: 10,
        showCursor: false,
        onComplete: function () {
          typed.stop()
          setLines4({ val: output4 })
        },
      })
    } else {
      new Typed(cmd5r.current, {
        strings: [""],
        typeSpeed: 10,
        showCursor: true,
      })
    }
  }, [lines1, lines2, lines3, lines4])

  return (
    <div
      className={`hidden sm:block text-white text-xs text-left font-mono${
        className ? " " + className : ""
      }`}
    >
      <div
        className={`clean-scroll flex bg-darkgreen rounded-2xl h-64 overflow-scroll border border-green pt-3${
          lines4.val ? " flex-col-reverse" : ""
        }`}
      >
        <div className="w-full">
          <div className="relative bg-green before:content-['>_'] before:absolute before:left-[0.5rem]">
            <div className="pl-6 pr-3">
              <span ref={cmd1r}></span>
            </div>
          </div>
          {lines1.val && (
            <>
              <div className="text-neonblue pl-2 pr-2 pt-1 pb-2">
                {lines1.val.map(function (l, i) {
                  return (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  )
                })}
              </div>
              <div className="relative bg-green before:content-['>_'] before:absolute before:left-[0.5rem]">
                <div className="pl-6 pr-3">
                  <span ref={cmd2r}></span>
                </div>
              </div>
            </>
          )}
          {lines2.val && (
            <>
              <div className="text-neonblue pl-2 pr-2 pt-1 pb-2">
                {lines2.val.map(function (l, i) {
                  return (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  )
                })}
              </div>
              <div className="relative bg-green before:content-['>_'] before:absolute before:left-[0.5rem]">
                <div className="pl-6 pr-3">
                  <span ref={cmd3r}></span>
                </div>
              </div>
            </>
          )}
          {lines3.val && (
            <>
              <div className="text-neonblue pl-2 pr-2 pt-1 pb-2">
                {lines3.val.map(function (l, i) {
                  return (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  )
                })}
              </div>
              <div className="relative bg-green before:content-['>_'] before:absolute before:left-[0.5rem]">
                <div className="pl-6 pr-3">
                  <span ref={cmd4r}></span>
                </div>
              </div>
            </>
          )}
          {lines4.val && (
            <>
              <div className="text-neonblue pl-2 pr-2 pt-1 pb-2">
                {lines4.val.map(function (l, i) {
                  return (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  )
                })}
              </div>
              <div className="relative bg-green before:content-['>_'] before:absolute before:left-[0.5rem]">
                <div className="pl-6 pr-3">
                  <span ref={cmd5r}></span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
