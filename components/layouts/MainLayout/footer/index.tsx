import Image from "next/image";
import Link from "next/link";
import githubIcon from "@/public/iconSocialMedia/github.png"
import InstagramIcon from "@/public/iconSocialMedia/instagram.png"
import EmailIcon from "@/public/iconSocialMedia/email.png"
import whatsAppIcon from "@/public/iconSocialMedia/whatsapp.png"
import linkedInIcon from "@/public/iconSocialMedia/linkedin.png"


export default function Footer() {
    const linkList = {
        github: 'https://github.com/ahmadridhoramadhan',
        instagram: 'https://www.instagram.com/ramadhanahmadridho/?hl=id',
        Email: 'mailto:ahmadridhor02@gmail.com',
        WhatsApp: 'https://wa.me/62882020539449',
        LinkedIn: 'https://www.linkedin.com/in/ahmad-ridho-ramadhan-6aa322247/'
    }

    return (
        <footer className="border-t-2 border-white bg-slate-900 py-5">
            <div className="flex justify-center gap-5 flex-wrap mb-5">
                <Link target="_blank" className="relative h-6 w-6 md:h-7 md:w-7" href={linkList.github}><Image src={githubIcon} alt="github" fill className="object-contain" /></Link>
                <Link target="_blank" className="relative h-6 w-6 md:h-7 md:w-7" href={linkList.instagram}><Image src={InstagramIcon} alt="Instagram" fill className="object-contain" /></Link>
                <Link target="_blank" className="relative h-6 w-6 md:h-7 md:w-7" href={linkList.Email}><Image src={EmailIcon} alt="Email" fill className="object-contain" /></Link>
                <Link target="_blank" className="relative h-6 w-6 md:h-7 md:w-7" href={linkList.WhatsApp}><Image src={whatsAppIcon} alt="WhatsApp" fill className="object-contain" /></Link>
                <Link target="_blank" className="relative h-6 w-6 md:h-7 md:w-7" href={linkList.LinkedIn}><Image src={linkedInIcon} alt="LinkedIn" fill className="object-contain" /></Link>
            </div>
            <div className="text-center">
                <p className="capitalize text-lg sm:text-xl lg:text-2xl">Created By</p>
                <p className="capitalize text-2xl sm:text-3xl lg:text-4xl">ahmad ridho ramadhan</p>
            </div>
        </footer>
    )
}