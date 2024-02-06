import UserProfileinfo from "@/components/UserProfileinfo";
import CommunicationPanel from "@/components/CommunicationPanel";

export default function Home() {
  return (

      <section className="text-white my-16">
        <div className="md:max-w-[600px] mx-auto flex flex-col gap-6 ">
          <UserProfileinfo />
          <CommunicationPanel />
        </div>
      </section>
  );
}
