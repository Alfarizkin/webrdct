import Navbar from './components/Navbar.jsx';
import herobg1 from '../../../assets/background/EB Page/herobg1.png'
import bg2 from '../../../assets/background/EB Page/bg2.png'
import contentbg from '../../../assets/background/EB Page/contentbg.png'

export default function EBPage() {
    return (
        <div className="EBPage w-full overflow-x-hidden">
            <Navbar />
            <section className='Hero-Section'>
                <img src={herobg1} />
            </section>
            <div className='TitleSection w-full h-full flex flex-row gap-34'>
                <div className='TitleBG w-173 relative'>
                    <img src={bg2} className='h-32 absolute bottom-0 left-0'/>
                </div>
                <div className="TitleText flex flex-col text-[#F2F2F2] pt-3 pb-6" style={{ fontFamily: "Istok Web" }}>
                    <h1 className='text-[48px] font-bold'>ECHOES BENEATH</h1>
                    <span className='max-w-267 text-[24px] font-normal'>
                        Descend into Echoes Beneath, 
                        a chilling first-person psychological horror game where your choices leads to multiple ending that reflect your moral compass. 
                        Play as Xavier, a sewer inspection leader for Brilliante, crushed by medical debts, facing a deceptively simple job that unravels into terror.
                    </span>
                </div>
            </div>
            <div className='BlankPage w-full h-58 bg-white' />
            <div className="w-full text-[#F2F2F2] flex flex-col bg-cover bg-top bg-right bg-no-repeat h-dvh py-80 px-26 gap-22" style={{ fontFamily: "Istok Web", backgroundImage: `url(${contentbg})` }}>
                <h1 className='text-[48px] font-bold'>Voice Recognation</h1>
                <span className='max-w-147.5 text-[24px] font-normal'>
                    Gunakan radio untuk berbicara dengan partner kerja. 
                    Hati-hati! Monster dapat mendengar suaramu!
                </span>
            </div>
            <div className='w-full bg-[#222222] flex flex-col pt-46.25 items-center justify-center pb-23 gap-13' style={{ fontFamily: "Istok Web" }}>
                <h1 className='text-[48px] font-bold'>Echoes Beneath - Trailer</h1>
                <div className='bg-white w-200 h-112.5'></div>
            </div>
            <div className="w-full text-[#F2F2F2] flex flex-col items-center justify-center h-dvh py-91 gap-18 bg-[#3B3B3B]" style={{ fontFamily: "Istok Web" }}>
                <h1 className='text-[48px] font-bold'>Tagline</h1>
                <h1 className='text-[48px] font-bold'>Wishlist Now</h1>
            </div>
            <div className='py-46'>
                <footer className='w-full bg-[#FF0000] h-40 top-0 left-0 flex items-center justify-between'></footer>
            </div>
        </div>
    );
}