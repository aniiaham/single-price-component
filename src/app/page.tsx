export default function Home() {
  return (
    <main className="h-screen w-full m-20">
      <div className="flex flex-col items-start ">
        <h1 className="font-bold">Join our community</h1>
        <p>30-day, hussle-free money back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews.
        </p>
        <p>
          Perfect for any developers who are serious about honing their skills.{" "}
        </p>
      </div>
      <div className="flex border-2 border-red-500 flex-col items-start">
        <p className="font-bold">Monthly Subscribtion</p>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-xl font-semibold">$29</p>
          <p className="text-l"> per month</p>
        </div>
        <p>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </div>
      <div></div>
    </main>
  );
}
