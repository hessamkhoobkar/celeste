export default function WelcomeMessage() {
  return (
    <section className="col-span-1 row-span-1 lg:col-span-3">
      <div className="w-full max-w-screen-md px-4 pt-8 md:px-12">
        <h2 className="mb-4 text-8xl font-black leading-[6rem] tracking-tighter">
          A view on your finances like never before.
        </h2>
        <p className="mb-4">
          {" "}
          Experience a new level of financial efficiency and control. Celeste is
          designed to help you manage your finances seamlessly, whether
          it&apos;s personal or business.
        </p>
      </div>
      <div className="hidden w-full px-4 pt-8 md:block md:px-12">
        <p className="mb-4">With Celeste, you can:</p>
        <ul className="flex w-full flex-col gap-4">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-foreground"
            >
              <path
                fill="currentColor"
                d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              ></path>
            </svg>
            <span className="font-bold">Track Your expenses:</span>
            <span>Easily add, edit, and monitor your expenses</span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-foreground"
            >
              <path
                fill="currentColor"
                d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              ></path>
            </svg>
            <span className="font-bold">Monitor your budget:</span>
            <span>
              Create, edit, and monitor your budgets as total or grouped
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-foreground"
            >
              <path
                fill="currentColor"
                d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              ></path>
            </svg>
            <span className="font-bold">Categorize your expenses:</span>
            <span>Easily categorize your expenses</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
