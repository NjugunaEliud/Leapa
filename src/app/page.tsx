import { LeapaWidget } from "./leapa_widget";

export default function HomePage() {
  return (
    <div className="flex min-h-screenmax-w-full h-screen  justify-center items-center w-full">
      <div className="w-[400px] p-6 flex flex-col gap-12">
        <h1 className="text-2xl font-bold text-center">Leapa Widget Demo</h1>
        <LeapaWidget />
      </div>
    </div>
  );
}
