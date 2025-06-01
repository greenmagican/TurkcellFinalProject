import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col p-3">
          <h1 className="fw-bold text-left display-5">Our Customers Love What We Do</h1>
          <p className="text-dark fw-bold fs-5">
            Transform your idea into reality with finsweet
          </p>

          <p className="text-secondary fs-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="members">
            <div className="members-circles d-flex">
              <div className="members-circle-1"></div>
              <div className="members-circle-2"></div>
              <div className="members-circle-3"></div>
            </div>
            <div className="d-flex mt-3">
              <p className="fw-bold text-primary mx-1">30+</p>
              <p className="fw-medium">
                Customer Reviews
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="testimonial-card p-3">
            <div className="d-flex flex-column">
              <div>
                <p className="fw-bold fs-4">
                  “Great course I really enjoyed it and the course was way easy to
                  learn with very good explanations of the code, I could easily
                  understand and develop applications with the knowledge gathered
                  during the course.”
                </p>
              </div>

              <div className=" d-flex align-items-center justify-content-between mt-5  ">
                <div className="left-side d-flex align-items-center ">
                  <div className="director-circle me-3"></div>
                  <div className="d-flex flex-column   ">
                    <p className="fw-bold fs-5 ">Johny Andro</p>
                    <p className="fw-medium text-secondary">
                      Director, Company
                    </p>
                  </div>
                </div>
                <div className="image">     <Image
                  src="/assets/header/Logo.svg"
                  alt="ipsum"
                  width={112.7}
                  height={25.58}
                ></Image></div>

              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
