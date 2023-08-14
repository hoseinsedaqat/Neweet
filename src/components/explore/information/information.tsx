import DanAbramov from "@/assets/DanAbramov.jpg";

import ColtSteele from "@/assets/ColtSteele.png";

import ScottMoss from "@/assets/ScottMoss.jpg";

import Image from "next/image";

function Information() {
  return (
    <>
      {/* Information Side */}
      <section
        className='col-md-4'
        id='information-column'>
        <main>
          {/* Who to follow */}
          <div className='who-follow'>
            <h5 className='mb-3'>Who to follow</h5>
            <div className='d-flex align-items-center justify-content-between my-3'>
              <div className='d-flex align-items-center'>
                <div>
                  <Image
                    src={ColtSteele}
                    alt='Recommended-Profile-Img'
                  />
                </div>
                <div className='ms-2'>
                  <small className='d-block'>Colt Steele</small>
                  <small className='d-block text-muted'>@ColtSteele</small>
                </div>
              </div>
              <p>
                <button className='bg-white text-dark'>
                  <small>Follow</small>
                </button>
              </p>
            </div>
            <div className='d-flex align-items-center justify-content-between my-3'>
              <div className='d-flex align-items-center'>
                <div>
                  <Image
                    src={ScottMoss}
                    alt='Recommended-Profile-Img'
                  />
                </div>
                <div className='ms-2'>
                  <small className='d-block'>Scott Moss</small>
                  <small className='d-block text-muted'>@ScottMoss</small>
                </div>
              </div>
              <p>
                <button className='bg-white text-dark'>
                  <small>Follow</small>
                </button>
              </p>
            </div>
            <div className='d-flex align-items-center justify-content-between my-3'>
              <div className='d-flex align-items-center'>
                <div>
                  <Image
                    src={DanAbramov}
                    alt='Recommended-Profile-Img'
                  />
                </div>
                <div className='ms-2'>
                  <small className='d-block'>Dan Abramov</small>
                  <small className='d-block text-muted'>@DanAbramov</small>
                </div>
              </div>
              <p>
                <button className='bg-white text-dark'>
                  <small>Follow</small>
                </button>
              </p>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <p className='text-primary cursor-pointer'>show more</p>
            </div>
          </div>
          {/* Footer */}
          <div className='footer my-3'>
            <div className='d-flex'>
              <small className='text-muted mx-1'>Terms of Service</small>
              <small className='text-muted mx-1'>Privacy Policy</small>
              <small className='text-muted mx-2'>Cookie Policy</small>
            </div>
            <div className='d-flex'>
              <small className='text-muted mx-1'>Accessibility</small>
              <small className='text-muted mx-1'>Ads info</small>
              <small className='text-muted mx-1'>More</small>
            </div>
            <small className='text-muted mx-1 d-block'>
              &copy; Neweet Design by Hosein Sedaqat 2023
            </small>
          </div>
        </main>
      </section>
    </>
  );
}

export default Information;
