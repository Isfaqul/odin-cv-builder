import "./App.css";
import { Phone, Email, Github } from "./Components/Contact.jsx";
import { Name } from "./Components/Name.jsx";

function App() {
  return (
    <main className="w-full max-w-4xl mx-auto">
      <h1 className="text-xl font-bold my-5 print:hidden print-hidden">Resume Builder</h1>
      <section className=" border border-slate-600 mx-auto p-2">
        <section className="bg-slate-800 rounded-lg text-neutral-100 p-3 space-y-1">
          <Name label="fullName" />
          <div className="flex justify-center gap-16 pt-2">
            <Phone label="phone" placeHolder="0000-12345" />
            <Email label="email" placeHolder="your-email@here.com" />
            <Github label="github" placeHolder="@yourgithubID" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
