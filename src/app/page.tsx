export default function Home() {
  return (
    <main className="h-screen w-full m-20">
      <div className="flex flex-col items-start gap-4 m-8">
        <h1 className="font-bold text-[#55b0b1] text-xl">Join our community</h1>
        <p className="text-green-400 font-bold">
          30-day, hussle-free money back guarantee
        </p>
        <div>
          <p className="text-gray-400">
            Gain access to our full library of tutorials along with expert code
            reviews.
          </p>
          <p className="text-gray-400">
            Perfect for any developers who are serious about honing their
            skills.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-2xl">
        <div className="flex bg-[#55b0b1] flex-col items-start text-gray-100 p-6 gap-2">
          <p className="font-semibold text-lg">Monthly Subscribtion</p>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl font-semibold">$29</p>
            <p className=" text-gray-300"> per month</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-white">Full access for less than $1 a day</p>
            <button className="bg-green-400 text-white max-w-md h-10 rounded shadow-md">
              Sign Up
            </button>
          </div>
        </div>
        <div className="bg-[#68bcbd] text-gray-100 p-6 flex flex-col gap-2">
          <p className="font-semibold text-lg">Why Us?</p>
          <div className="text-gray-100">
            <p>Tutorials by industry experts</p>
            <p>Peer&expert code review</p>
            <p>Coding exercises</p>
            <p>Peer&expert code review</p>
            <p>Flashcard decks</p>
            <p>New videos every week</p>
          </div>
        </div>
      </div>
    </main>
  );
}
