import { TestimoniData } from "../../libs/Data/TestimoniData"

const TestimoniCard = () => {
    return (
        <div className="flex justify-between gap-8">
            {TestimoniData.map((testimoni) => (
                <div>
                    <div className="flex gap-4 items-center">
                        <img src={testimoni.image} alt="testimoni" className="w-[64px] h-[64px] rounded-xl" />
                        <div>
                            <h1 className="text-[18px] font-bold">{testimoni.name}</h1>
                            <p className="text-[14px] text-[#FF4363]">{testimoni.position}</p>
                        </div>
                    </div>
                    <p className="text-[18px] text-[#6E7991] mt-4">{testimoni.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TestimoniCard