interface DonationButtonProps {
    value: number;
    link: string;
}

export const DonationButton = ({ value, link }: DonationButtonProps) => {
    return (
        <a
            target="_blank"
            href={link}
            className="h-auto flex justify-center items-center text-[#D92525] py-6 px-8 text-2xl font-hand font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1 hover:text-white hover:bg-[#D40924] shadow-hand border-[#d8d8d8] rounded-2xl"
        >
            Doe R$ {value},00
        </a>
    )
}