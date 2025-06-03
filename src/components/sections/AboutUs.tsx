import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import image from "../../assets/financial1.png"

export const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="text-center mx-[7rem] pb-8">
        <Title>About Us</Title>
        <Paragraph>
          We are Tax business that has been serving the Los Angeles community
          for 30 years. We specialize in personal income tax preparation,
          complete small business services, financial reporting, SBA loans,
          LLC's, and notary public services. The business is known for its
          highly dedicated personalized service, which includes managing
          clients' investments over time.
        </Paragraph>
      </div>

      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src={image}
              className="w-full h-[30rem] object-cover rounded-3xl shadow-lg relative z-10"
              alt="About us"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Incorporations"
              description="Incorporating can be complicated and lengthy, but following this guide helps you learn the steps and makes it effortless."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title="LLC's"
              description="Find out what an LLC is and learn why so many businesses choose to structure themselves that way."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
