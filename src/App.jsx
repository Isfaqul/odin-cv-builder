import "./App.css";
import { Phone, Email, Github } from "./Components/Contact.jsx";
import { Name } from "./Components/Name.jsx";
import { SectionHeader } from "./Components/SectionHeader.jsx";
import { Table } from "./Components/Table.jsx";
import { Experience } from "./Components/Experience.jsx";
import {Achievements} from "./Components/Achievements.jsx";
import {Certifications} from "./Components/Certifications.jsx";
import {GenericList} from "./Components/GenericList.jsx";
import {useRef} from "react";

function App() {
  let contentRef = useRef(null);

  return (
      <main className="w-full max-w-4xl mx-auto">
        <hgroup className="flex justify-between items-center print:hidden hide-on-print">
          <h1 className="text-xl text-neutral-200 tracking-wide font-bold my-5 ">
            Resume Builder
          </h1>
        </hgroup>

        {/* Resume Starts */}
        <section
            ref={contentRef}
            className="mx-auto min-h-[297mm] bg-slate-100 mt-5 p-5 mb-5 rounded-md shadow-2xl print:shadow-none print:bg-white print:mt-0 print:mb-0 print:p-0">
          <div
              className="absolute top-[267mm] left-0 w-full border-t border-dashed z-10 border-red-500
                  before:content-['A4_ends_here'] before:absolute before:-top-4 before:left-12 
                  before:-translate-x-1/2 before:bg-white before:px-2 before:text-xs before:text-red-600 print:hidden"
          ></div>
          <section className=" bg-slate-800 rounded-lg text-neutral-100 p-3 space-y-1">
            <Name label="fullName"/>
            <div className="flex justify-center gap-10 pt-2">
              <Phone label="phone" placeHolder="0000-12345"/>
              <Email label="email" placeHolder="your-email@here.com"/>
              <Github label="github" placeHolder="@yourgithubID"/>
            </div>
          </section>
          {/* Education */}
          <section className="mt-3">
            <SectionHeader name="Education"/>
            <div className="border-l-2 border-dashed border-slate-300 pl-5 py-2 my-1">
              <Table/>
            </div>
          </section>
          {/* Work experience */}
          <section className="mt-3">
            <SectionHeader name="Work Experience"/>
            <div className="border-l-2 border-dashed border-slate-300 pl-5 py-2 my-1">
              <Experience/>
            </div>
          </section>
          {/* Achievements */}
          <section className="mt-3">
            <SectionHeader name="Achievements"/>
            <div className="border-l-2 border-dashed border-slate-300 pl-5 py-2 my-1">
              <Achievements/>
            </div>
          </section>
          {/* Certifications */}
          <section className="mt-3">
            <SectionHeader name="Certifications"/>
            <div className="border-l-2 border-dashed border-slate-300 pl-5 py-2 my-1">
              <Certifications/>
            </div>
          </section>
          {/* Skills */}
          <section className="mt-3">
            <SectionHeader name="Skills"/>
            <div className="border-l-2 border-dashed border-slate-300 pl-5 py-2 my-1">
              <GenericList/>
            </div>
          </section>
          {/* Hobbies */}
          <section className="mt-3">
            <SectionHeader name="Hobbies"/>
            <div className="border-l-2 border-dashed border-slate-300 pl-5 py-2 my-1">
              <GenericList/>
            </div>
          </section>
        </section>
        <button className="ml-auto block bg-amber-300 text-black cursor-pointer active:bg-amber-400 px-2 py-1 rounded-sm mb-5"
                onClick={print}>Save PDF
        </button>
      </main>
  );
}

export default App;
