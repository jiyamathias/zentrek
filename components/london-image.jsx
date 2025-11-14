import Image from "next/image";

export default function LondonStatusImage() {
    return (
        <section className="w-full mx-auto flex flex-col md:flex-row items-center">
            <div className="">
                <Image
                    width={420}
                    height={800}
                    src="/images/london-img.png"
                    alt="london-image"
                    className="object-cover w-full h-full"
                />
            </div>
        </section>
    );
}
