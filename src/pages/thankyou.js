import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center gap-8">
        <h2 className="ft-8 text-center">
          You’re In! Let’s Get This Started!
        </h2>
        <p className="ft-4 text-center">
          I’ll reach out within 24 hours to schedule your free consultation session.
          <br/><br/>
          We’ll dive into what’s holding you back and get you on track to real results
        </p>
        <p className="text-center ft-2">
          Can’t wait that long?
        </p>
        <div className="flex flex-col items-center justify-center gap-10">
          <a
            className="button hover:scale-105 bg-brand-2 hover:bg-brand-3 ft-4 flex justify-center items-center "
            href={info.surveyRedirect === '' ? `sms:${info.whatsapp.value}` : info.surveyRedirect}
            target="_blank"
          >
            <span className="material-icons">arrow_forward</span>Click Here
            <span className="text-white material-icons">arrow_back</span>
          </a>
          <a
            className="ft-2 py-3 px-6 rounded-lg items-center  bg-green-500 hover:bg-green-600 transition-all hover:scale-105"
            href={`tel:${info.whatsapp.value}`}
          >
            <p className="text-white">
              Or give me a <span className="font-semibold">call</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
