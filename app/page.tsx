import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: <div>Join the Free Train and Build Challenge</div>,
      desc: (
        <div>
          Embark on a two-month transformational journey, enhancing your
          existing design knowledge and elevating your skills to create web or
          mobile applications in an exciting pair challenge. Our carefully
          crafted program equips you with essential tools and knowledge. Compete
          to win an enticing prize of <b>50,000 Naira</b> and set the stage for
          your successful career.
        </div>
      ),
      eligibility:
        "Must possess a design background in Figma, Adobe XD,sketch, Photoshop, or a related field.",
      href: "https://forms.gle/CXLuAzVrFE21Pfiy9",
      img: "/assets/images/image1.png",
    },
    {
      title: <div>Enroll in the Free Product Management Training</div>,
      desc: (
        <div>
          For those envisioning themselves as adept managers, this training is
          your gateway to honing your managerial skills. Learn the ins and outs
          of product cycle management, defining product vision, crafting
          effective strategies, and delivering outstanding results. Take charge
          and lead teams towards achieving organizational goals!
        </div>
      ),
      eligibility: (
        <div>Passionate about management and goal-oriented pursuits.</div>
      ),

      href: "https://forms.gle/6g3i3EN6ySL6vzwA8",
      img: "/assets/images/image2.png",
    },
    {
      title: <div>Learning Matchmaker</div>,
      desc: (
        <div>
          Do you have a keen interest in various cutting-edge tech digital
          skills, such as cloud computing, artificial intelligence, blockchain,
          data science, cybersecurity, and software engineering? We'll connect
          you with expert trainers, facilitating your access to their
          informative and inspiring classes. We assist in finding free classes
          they offer, giving you a fantastic head start. Sign up and stay
          updated on upcoming sessions and elevate your knowledge to the next
          level!
        </div>
      ),
      eligibility: <div>Driven by genuine interest and passion.</div>,

      href: "https://forms.gle/nDXxPrcsDAtShpJV7",

      img: "/assets/images/image3.png",
    },
  ];
  return (
    <div>
      <main className="mx-auto px-4 py-0">
        <Image
          className="md:ml-20 mt-5 mb-5 md:absolute"
          src="/assets/images/lmplogo.png"
          alt="lmplogo"
          height={100}
          width={100}
        />
        <section className="text-gray-600 md:h-screen flex-col flex md:flex-row justify-between md:justify-around items-center ">
          {/* Left side of Flex */}
          <div className="mb-5 mx-5">
            <h1 className="text-5xl mb-2">
              Welcome to <br />{" "}
              <span className="font-bold ">Learning Manifest Pod <br/> Registration Portal</span>
            </h1>
            <p className="text-[1rem] md:text-[1.7rem] my:0 my-1">
              Your Gateway to Digital Success!
            </p>
            <Link
              href="#cardSection"
              className="my-2 bg-yellow-600 hover:bg-transparent border border-yellow-600 text-white hover:text-yellow-600  inline-block font-semibold max-lg:py-1 py-2 max-lg:px-2 px-4 rounded-lg"
            >
              Get Started
            </Link>
          </div>
          {/* Right side of Flex */}
          <Image
            src="/assets/images/image4.png"
            alt="hero_image"
            height={200}
            width={400}
          />
        </section>

        <section
          id="cardSection"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-10"
        >
          {cards.map((card, key) => (
            <div
              key={key}
              className=" flex flex-col relative items-start p-4 border h-full border-slate-300 rounded-lg w-full hover:bg-yellow-100"
            >
              <h2 className="text-3xl font-bold text-gray-700 text-center w-full">
                {card.title}
              </h2>
              <hr className=" w-full my-4" />
              <Image
                className="rounded-lg my-6 place-self-center"
                src={card.img}
                alt={card.href}
                width={200}
                height={100}
              />
              <hr className=" w-full my-2" />

              <p className="mt-4 mb-2 text-md text-align tracking-tighter">
                {card.desc}
              </p>
              <div className="mt-4 mb-16">
                <span className="font-bold my-2">🎯 Eligibility</span>
                <br />
                {card.eligibility}
              </div>

              <Link
                target="_blank"
                href={card.href}
                className="my-4  h-10 flex w-5/6 justify-center items-center place-self-center absolute bottom-0 bg-yellow-600 hover:bg-transparent border border-yellow-600 text-white hover:text-yellow-600   font-semibold py-1 px-2 rounded-lg"
              >
                I'm Interested
              </Link>
            </div>
          ))}
        </section>
      </main>
      <footer className="bg-yellow-600">
        <p className="text-center text-white py-2">
          Copyright 2023 Learning Manifest Pod
        </p>
      </footer>
    </div>
  );
}
