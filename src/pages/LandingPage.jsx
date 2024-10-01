import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();
  const handleShorten = (e) =>{
    e.preventDefault();
    if(longUrl) navigate(`/auth?createNew=${longUrl}`);
  }
  return (
    <div>
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need!
      </h2>
      <form onSubmit={handleShorten} className="flex gap-7 text-black justify-center items-center mx-auto sm:h-14 flex-col sm:flex-row w-full md:w-2/4">
        <Input
          value={longUrl}
          type="url"
          placeholder="Enter your loooong URL"
          className=" flex-1 py-4 px-4 rounded-3xl text-white font-mono"
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button type="submit" variant="destructive">Shorten!</Button>
      </form>
      <img src="/public/banner.jpg" alt="Banner" className="mt-10 mx-auto" />
      <Accordion type="single" collapsible className="w-[80rem] mx-auto my-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the TRIMRR URL Shortener works?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my links?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
