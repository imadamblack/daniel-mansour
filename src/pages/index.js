import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i00 from '../../public/landing/00.png';
import ibenefits from '../../public/landing/benefits.png';
import istepByStep from '../../public/landing/step-by-step.png';
import iguarantees from '../../public/landing/guarantees.png';
import ifaqs from '../../public/landing/faqs.png';
import itestimonials from '../../public/landing/testimonials.png';
import clientes1 from '../../public/landing/logos/clients-01.png';
import clientes2 from '../../public/landing/logos/clients-02.png';
import clientes3 from '../../public/landing/logos/clients-03.png';
import clientes4 from '../../public/landing/logos/clients-04.png';
import clientes5 from '../../public/landing/logos/clients-05.png';
import clientes6 from '../../public/landing/logos/clients-06.png';
import clientes7 from '../../public/landing/logos/clients-07.png';
import clientes8 from '../../public/landing/logos/clients-08.png';
import clientes9 from '../../public/landing/logos/clients-09.png';
import clientes10 from '../../public/landing/logos/clients-010.png';
import clientes11 from '../../public/landing/logos/clients-011.png';
import clientes12 from '../../public/landing/logos/clients-012.png';
import clientes13 from '../../public/landing/logos/clients-013.png';
import clientes14 from '../../public/landing/logos/clients-014.png';
import clientes15 from '../../public/landing/logos/clients-015.png';
import clientes16 from '../../public/landing/logos/clients-016.png';
import clientes17 from '../../public/landing/logos/clients-017.png';
import clientes18 from '../../public/landing/logos/clients-018.png';
import clientes19 from '../../public/landing/logos/clients-019.png';
import clientes20 from '../../public/landing/logos/clients-020.png';
import clientes21 from '../../public/landing/logos/clients-021.png';
import clientes22 from '../../public/landing/logos/clients-022.png';
import clientes23 from '../../public/landing/logos/clients-023.png';
import clientes24 from '../../public/landing/logos/clients-024.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Just click the button',
    description: 'Request a free consultation, take control of your business\' future.',
  };

  return (
    <>
      <section
        className="relative min-h-[60rem] md:min-h-[80rem] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[24rem] md:h-[60rem] bottom-0 absolute bg-gradient-to-t from-brand-1 md:from-brand-1 via-transparent md:via-brand-1 to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container mt-auto w-full text-center z-50 p-8">
          <h1
            className="md:w-2/3 mx-auto relative ft-12 text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_20%)] md:[text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Optimize your business strategy.<br/>
            Take control.
          </h1>
          <p className="ft-3 mt-4 mb-0 text-white">Not a marketing agency, not your CMO — The missing piece.</p>
          <div className="flex flex-col justify-center items-center mt-12 md:text-white">
            {/*<Link href="#contact">*/}
            {/*  <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>*/}
            {/*</Link>*/}
            <p className="-ft-2 md:text-left text-white">{cta.description}</p>
            <p className="material-icons animate-bounce text-white"><span className="ft-9">expand_more</span></p>
          </div>

        </div>
      </section>

      <section className="container my-16">
        <div className="reading-container">
          <p className="ft-2">
            If you’re investing in marketing but not seeing the results you expected — or if you’re relying too much on
            agencies without real control — it’s time to change your approach.
            <br/><br/>
            The key isn’t spending more, it’s making smarter, data-driven decisions.
            <br/><br/>
            I'm Daniel Mansour, CEO of MANVEN, and I’ll help you cut the guesswork,
            optimize your strategy, and ensure every dollar actually moves the needle.
            <br/><br/>
            No fluff, no wasted effort — just real insights that help you take control and get measurable results.
          </p>
        </div>
      </section>

      <Blockbuster
        overhead="Benefits"
        title="What you’ll gain from this consultation"
        image={ibenefits}
      />
      <section className="my-16">
        <div className="reading-container">
          <h3>Make decisions based on data, not guesswork</h3>
          <p>Look, if you’re still making marketing decisions based on gut feeling… you’re flying blind. Stop guessing —
            start using real data to figure out what’s actually working.</p>
          <h3>Optimize your budget and maximize ROI</h3>
          <p>Here’s the thing — your budget isn’t unlimited. Every dollar needs to count. And if you’re not tracking
            your ROI, you might as well be setting money on fire.</p>
          <h3>Manage agencies and internal teams more effectively</h3>
          <p>And let’s talk about your team, you need to know exactly what to ask for, how to hold them accountable, and
            what results to expect. No more vague reports or fancy presentations that don’t actually mean anything.</p>
          <h3>Scale your business without losing control</h3>
          <p>Scaling a business is already tough. The last thing you need is a marketing strategy that feels like a
            runaway train. Keep it aligned with your goals, so growth doesn’t turn into chaos.</p>
          <h3>Save time and focus on what really matters</h3>
          <p>Oh, and let’s cut the time-wasting. Less back-and-forth, fewer pointless meetings — more execution, better
            results. That’s the game.</p>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Step-by-step"
        title="A Clear Plan to Improve Your Marketing"
        image={istepByStep}
      />
      <section className="my-16">
        <p className="reading-container">This isn’t about generic advice — it’s about real, actionable changes that will
          transform your marketing.</p>
        <p className="reading-container">You’ll have me by your side in marketing meetings and will provide insights or
          even new strategies to push you in the right track.</p>
        <div className="px-8 grid grid-cols-1 md:grid-cols-5 gap-8 my-16">
          <div className="p-8 border bg-brand-1/10">
            <h3 className="mb-6">Marketing Audit</h3>
            <p>We’ll analyze your campaigns, where your money is going, and what’s actually driving results. No fluff,
              just facts.</p></div>
          <div className="p-8 border bg-brand-1/10">
            <h3 className="mb-6">Strategy Optimization</h3>
            <p>We’ll refine your marketing plan so it’s efficient, targeted, and built for growth.</p></div>
          <div className="p-8 border bg-brand-1/10">
            <h3 className="mb-6">Agency & Vendor Oversight</h3>
            <p>Working with agencies? We’ll make sure they’re delivering real value — not just reports that look good
              but
              don’t mean anything.</p></div>
          <div className="p-8 border bg-brand-1/10">
            <h3 className="mb-6">Budget Optimization</h3>
            <p>We’ll restructure your marketing spend so you get the best possible return. No more wasted dollars.</p>
          </div>
          <div className="p-8 border bg-brand-1/10">
            <h3 className="mb-6">Support for Key Decisions</h3>
            <p>From hiring the right talent to evaluating new opportunities, I’ll help you make the smart moves that
              grow your business.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-16 items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Background"
        title="Proven Results from Businesses Like Yours"
        image={itestimonials}
      />
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            <div className="w-full flex flex-col bg-brand-1 overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-3">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                  Working with Daniel was positive and educational. His marketing skills enhanced our brand and
                  broadened our customer base effectively. With his innovative approach to budgeting and detailed
                  strategies, our marketing needs were expertly handled. Highly recommend for all branding and marketing
                  projects.
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">Christine Cliver</p>
                  <p className="serif text-white">VP Marketing & Product Development <br/>[Happyluxe]</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-1 overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-3">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                  As General Manager of Urban Colony Furniture, I worked closely with Daniel Mansour for 3 years. His
                  expertise significantly energized our brand, increasing sales and enhancing recognition. Extremely
                  pleased with the results and our business relationship, I highly recommend his service.
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">Terry Hancock</p>
                  <p className="serif text-white">General Manager <br/>[Urban Colony & Black Label Home]</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-1 overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-3">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                  Working with Daniel was delightful and stress-free. They exceeded our expectations with our website,
                  were communicative, and streamlined the process. Exceptional service and amiable team. Highly
                  recommend for website and marketing needs!
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">Bryan Hemphill</p>
                  <p className="serif text-white">Media Relations <br/>[Blackstar]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-20 pt-20 border-t border-brand-1">
          <h3 className="ft-6 text-center">Companies I have worked with</h3>
        </div>

        <div className="px-8 grid grid-cols-3 md:grid-cols-8 gap-8">
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes1} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes2} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes3} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes4} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes5} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes6} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes7} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes8} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes9} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes10} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes11} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes12} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes13} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes14} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes15} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes16} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes17} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes18} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes19} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes20} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes21} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes22} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes23} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes24} layout="fill" objectFit="contain"/>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>


      <Blockbuster
        overhead="Guarantees"
        title="My commitment to your results"
        image={iguarantees}
      />
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-12 bg-brand-1 flex items-center">
            <p className="ft-2 text-white">100+ businesses have optimized their marketing with this consultation.</p>
          </div>
          <div className="p-12 bg-brand-1 flex items-center">
            <p className="ft-2 text-white">No long-term contracts — if you don’t see the value, you can cancel
              anytime.</p>
          </div>
          <div className="p-12 bg-brand-1 flex items-center">
            <p className="ft-2 text-white">Data-driven strategies, no guesswork.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="FAQs"
        title="Everything You Need to Know Before Getting Started"
        image={ifaqs}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
              You've scrolled all the way. <br/>Request a discovery session for free.
            </h2>
            <p className="ft-1 my-8">
              Share your contact details and schedule a call with me.<br/><br/>
              Our consultations start at $350 / month. <br/>
              First week is on me.
            </p>

            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
