export function Hero() {
  // Enlarges and decreases the opacity of the taikoGeom image upon scroll
  if (typeof window !== "undefined") {
    const changeTaikoGeom = () => {
      // only do animation on home page
      if (window.location.pathname !== "/") {
        return;
      }

      const taikoGeom = document.getElementById("taikoGeom");
      const taikoGeomParent = document.getElementById("taikoGeomParent");
      const elementHeight = window.pageYOffset;

      // Enlarge the TaikoGeom width on scroll
      if (window.innerWidth.valueOf() < 500) {
        taikoGeomParent.style.width = `${
          window.innerWidth.valueOf() * 0.91666667 + elementHeight * 9
        }px`;

        // Lower the TaikoGeom opacity on scroll
        // Smaller screens need a faster decrease
        if (1 - elementHeight * 0.003 >= 0) {
          taikoGeom.style.opacity = `${
            (1 - elementHeight * 0.003) * (1 - elementHeight * 0.003)
          }`;
        }
      } else {
        taikoGeomParent.style.width = `${
          window.innerWidth.valueOf() / 2 + elementHeight * 9
        }px`;

        // Lower the TaikoGeom opacity on scroll
        taikoGeom.style.opacity = `${1 - elementHeight / 250}`;
      }
    };
    window.addEventListener("scroll", changeTaikoGeom);
  }

  return (
    <div className="mx-auto max-w-[90rem] px-3">
      <div className="relative bg-neutral-50 dark:bg-neutral-900 mt-3">
        <main className="lg:relative">
          <div className="relative z-10 w-3/4 pt-16 pb-20 text-left lg:py-48">
            <div className="pl-[max(env(safe-area-inset-left),1.5rem)]">
              <h1 className="font-grotesk text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100">
                A <span className="text-[#e81899]">Type 1</span> ZK-EVM
              </h1>
              <p className="font-groteskmedium mt-3 text-lg text-neutral-600 sm:text-xl md:mt-5 dark:text-neutral-100">
                Decentralized, Ethereum-equivalent ZK-Rollup.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row md:justify-left">
                <div className="inline-flex mb-4 sm:mb-0 sm:mr-4">
                  <a
                    href="/docs/guides/deploy-a-contract"
                    className="inline-flex items-center rounded-md border border-transparent bg-[#e81899] px-5 py-2.5 text-base font-semibold text-white dark:text-neutral-100 hover:bg-[#d1168a] hover:no-underline hover:text-white w-auto"
                  >
                    Deploy a contract
                  </a>
                </div>
                <div className="inline-flex">
                  <a
                    href="/docs/guides/run-a-node"
                    className="inline-flex items-center rounded-md border-2 border-[#e81899] bg-transparent px-5 py-2.5 text-base font-semibold text-[#e81899] hover:border-[#d1168a] hover:text-[#d1168a] hover:no-underline w-auto"
                  >
                    Run a node
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id="taikoGeomParent"
            className="absolute inset-y-0 right-0 overflow-hidden h-full w-11/12 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
          >
            <img
              id="taikoGeom"
              className="absolute z-0 -right-6 overflow-visible h-full w-full object-cover max-w-none"
              src="/images/Taiko_GEOM_1_Fluo_Sliced.svg"
              alt=""
            />
          </div>
        </main>
      </div>
    </div>
  );
}
