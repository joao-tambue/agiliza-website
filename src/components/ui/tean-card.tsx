type TeamCardProps = {
    image: string;
    name: string;
    role: string;
    rotate: number;
};

function TeamCard({
    image,
    name,
    role,
    rotate,
}: TeamCardProps) {
    return (
        <div
            className="relative w-[135px] h-[180px] rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2"
            style={{
                transform: `rotate(${rotate}deg)`,
            }}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-3 left-3">
                <h4 className="text-white text-[10px] uppercase font-bold">
                    {name}
                </h4>

                <p className="text-[#E84B2A] text-[9px] uppercase font-semibold">
                    {role}
                </p>
            </div>
        </div>
    );
}

export { TeamCard }