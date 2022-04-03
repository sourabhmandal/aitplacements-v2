import Image from "next/image";
import React, { useState } from "react";
import Noticemodal from "./noticemodal";

function Notice() {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full max-w-6xl p-1" onClick={() => setIsOpen(true)}>
      <Noticemodal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="rounded-t-lg border-x border-t flex flex-wrap items-center justify-between bg-slate-200 py-4 px-8">
        <div className="flex flex-wrap items-center">
          <div className="p-2 rounded-lg bg-white flex items-center">
            <Image
              src={"https://picsum.photos/200/300"}
              width={30}
              height={30}
              alt=""
              className="rounded-full"
            />
          </div>

          <p className="mx-8 text-lg font-bold text-gray-600">
            jhkh dskjfh sdfkljjhfds jkhfhds sdffkj
          </p>
        </div>
        <div className="flex flex-wrap items-center">
          <p className="mx-4 text-base tracking-tight font-bold text-slate-400">
            22/05/1997 | 9:30am
          </p>
        </div>
      </div>
      <div className="rounded-b-lg bg-white border-x border-b px-8 py-4 text-sm flex flex-col text-gray-800 font-light">
        kjbdsm sfdbnmm,bsfkjf effbmbwef wef fewmnnbfwe wef mnefbkfwe fewnkbfwe
        efw mfnewbfkebwwe dsmnnbf
        <hr className="my-2" />
        <div className="inline-flex w-full">
          <div className="flex items-center px-2 py-1 bg-green-100 border-2 border-green-500 rounded-full">
            <div className="flex mr-2 w-5 h-5 items-center justify-center bg-white rounded-full text-green-500">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="text-green-500 font-heading font-medium">
              battery life
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
