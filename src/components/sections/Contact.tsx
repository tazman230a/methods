import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Container } from "../shared/Container";
import { EmailForm } from "./Emailform";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(323) 291 2566",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Cell Phone",
    description: "(310) 266 6415",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dembali@aol.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "2103 M.L. King Blvd Los Angeles, Ca 90008",
  },
];

export const Contact = () => {
  return (
    <section id="contact">
      <Container className="text-heading-1">
        <div>
          <h1 className="text-heading-1 text-5xl text-center pb-6">
            Contact Us
          </h1>
          <div className="flex pb-10">
            <EmailForm />
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6 px-5">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] dark:bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px] bg-body">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60 text-heading-1">
                          {item.title}
                        </p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
