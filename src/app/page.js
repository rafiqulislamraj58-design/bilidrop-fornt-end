import Hero from "@/components/Hero";
import PopularCategories from "@/components/PopularCategories";
import TopLibrarians from "@/components/TopLibrarians";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Hero/>

     <PopularCategories/>
     <TopLibrarians/>
    </div>
  );
}
