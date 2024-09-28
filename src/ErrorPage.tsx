import { Link, useRouteError } from "react-router-dom";
import alertImg from './assets/alerterror.png'

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">     

      <section className="h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            
              <img src={alertImg} alt="alert" className="object-fill w-44 rounded-full mx-auto my-8" />
            
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xltext-white">
              {(error as { statusText?: string })?.statusText || (error as Error)?.message}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500">Sorry, an unexpected error has occurred. </p>
            <Link to='/'>
              <button type="button" className="text-white bg-[#24292F] my-10 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                <span className="mx-2">Go back to home</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}