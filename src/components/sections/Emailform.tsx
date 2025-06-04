import { Button } from "../shared/Button";
import { Paragraph } from "../shared/Paragraph";

export const EmailForm = () => {
  return (
    <div className=" p-5 border border-box-border bg-box-bg rounded-2xl">
      <h1 className="text-center text-2xl font-bold">Let's work together</h1>
      <Paragraph className="text-xl text-center font-semibold py-2">
        We are looking forward to working with you.
      </Paragraph>
      <form action="#" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="pl-5 border rounded-2xl h-10 bg-[#27272c] text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="pl-5 border rounded-2xl h-10 bg-[#27272c] text-white"
        />
        <textarea
          name="message"
          placeholder="Email Address"
          rows={10}
          className="pl-5 pt-2 border rounded-2xl bg-[#27272c] text-white"
        />
        <Button>Send</Button>
      </form>
    </div>
  );
};
