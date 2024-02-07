import Image from "next/image"

export default function FrontPage() {
    return (
        <div className="flex mt-6">
            <div className="w-[60%] ">
                <div className=" ">
                    <div className="max-w-7xl mx-auto ">
                        <div className="px-4 py-8 sm:px-6 lg:px-8">
                            <h1 className="text-5xl font-bold text-gray-900">Showcase your lyrical skills and take this challenging Quiz!</h1>
                            <p className="mt-2 text-md leading-6 text-gray-600">In this game, we&apos;ve taken song lyrics and passed them through multiple rounds of translation. Your task is to guess the original song based on the final translated lyrics. Are you ready to put your music knowledge to the test?</p>
                            <a href="#" className="mt-8 bg-[#FED233] border-2 border-black py-2 px-6 rounded-lg inline-block">Start Playing !</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-[40%] ">
                <Image src={"/Images/logo-enhanced.png"} alt="main Illustration not found" className=" "  width={200} height={200} layout="responsive" />
            </div>
        </div>
    )
}