import Image from "next/image";
const CommunicationPanel = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <div className="min-h-[350px] w-full border-[2px] border-white rounded-3xl"></div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Say hello to your partner..."
            className="w-full py-4 px-3 border-[2px] rounded-3xl text-white bg-transparent focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 self-end">
        <div className="border-[3px] border-call-icon rounded-full p-1 sm:p-2">
          <Image
            src={"/images/call-icon.svg"}
            height={40}
            width={40}
            alt="call icon"
          />
        </div>

        <div className="border-[3px] border-mute-unmute-icon rounded-full p-1 sm:p-2">
          <Image
            src={"/images/mic-icon.svg"}
            height={40}
            width={40}
            alt="mute icon"
          />
        </div>

        <div className="border-[3px] border-report-icon rounded-full p-1 sm:p-2">
          <Image
            src={"/images/report-icon.svg"}
            height={40}
            width={40}
            alt="report icon"
          />
        </div>

        <div className="border-[3px] border-send-icon rounded-full p-1 sm:p-2">
          <Image
            src={"/images/send-icon.svg"}
            height={40}
            width={40}
            alt="send icon"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunicationPanel;
