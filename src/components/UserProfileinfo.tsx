import Image from "next/image"

const UserProfileinfo = () => {
  return (
    <div className=" flex items-center gap-4 sm:gap-6">
    <div className="h-32 sm:h-40 min-w-32 sm:min-w-40 rounded-[50%] overflow-hidden">
      <Image
        src={"/images/user-1.jpg"}
        width={150}
        height={150}
        className="w-full h-full"
        alt="user's image"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="leading-none text-[1.125rem] text-gray-200 mb-1">
        User from:<span className="font-semibold ml-2 ">ALGERIA</span>
      </h3>
      <h2 className="font-bold mb-3 sm:mb-5 leading-none text-[2rem] sm:text-[3rem] md:text-[3.75rem]">
        ALEX BECKER
      </h2>
      <p className="text-gray-200 font-light text-[1rem]">
        Digital communicator navigating the chat landscape with flair.
        Master of words,
      </p>
    </div>
  </div>
  )
}

export default UserProfileinfo