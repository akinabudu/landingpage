"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Giveaway from "./giveaway";

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.5 },
    },
  };

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
        <section className="text-gray-600 md:h-screen flex-col flex md:flex-row justify-center md:justify-around items-center ">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mb-5 mx-5"
          >
            <h1 className="text-5xl mb-3">
              Welcome to <br />
              <span className="font-bold my-1 leading-5">
                Learning Manifest Pod <br /> Registration Portal
              </span>
            </h1>
            <div className="text-[1rem] md:text-[1.7rem] my:0 my-1">
              Your Gateway to Digital Success!
            </div>
            <Link
              href="#learning-options"
              className="my-4 bg-yellow-600 hover:bg-transparent border border-yellow-600 text-white hover:text-yellow-600  inline-block font-semibold max-lg:py-1 py-4 max-lg:px-2 px-10 rounded-lg"
            >
              Get Started
            </Link>
            <div className="text-sm">
              Get our free ebook on how to map your self attribute <br /> to a
              tech career and see what best fits you{" "}
              <Link className="underline text-yellow-500" href="#giveaway">
                here
              </Link>
            </div>
          </motion.div>
          {/* Right side of Flex */}
          <motion.div className="w-1/4 h-full">
            <Image
              src={"/assets/images/image4.png"}
              alt="hero_image"
              height={150}
              width={300}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
            />
          </motion.div>
        </section>

        <section
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          id="learning-options"
          className="md:h-full grid grid-cols-1 md:grid-cols-3 gap-4 my-5 px-10"
        >
          {cards.map((card, key) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: [0.9, 1],
                boxShadow: ".5px .5px 1 rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 1, delay: 0.2 }}
              key={key}
              className=" flex flex-col relative items-start p-4 border h-full border-slate-300 rounded-lg w-full hover:bg-gray-50"
            >
              <h2 className="text-3xl font-bold text-gray-700 text-center w-full">
                {card.title}
              </h2>
              <hr className=" w-full my-4" />
              <Image
                className="rounded-lg my-6 place-self-center"
                src={card.img}
                alt={card.href}
                width={100}
                height={50}
              />
              <hr className=" w-full my-2" />

              <div className="mt-4 mb-2 text-md text-align tracking-tighter">
                {card.desc}
              </div>
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
            </motion.div>
          ))}
        </section>
        <Giveaway />
      </main>
      <footer className="bg-yellow-600">
        <div className="text-center text-white py-2">
          Copyright 2023 Learning Manifest Pod
        </div>
      </footer>
    </div>
  );
}
