import Navbar from './components/Navbar.jsx';
import herobg1 from '../../../assets/background/EB Page/herobg1.png'
import bg2 from '../../../assets/background/EB Page/bg2.png'

export default function EBPage() {
    return (
        <div className="EBPage w-full">
            <Navbar />
            <section className='Hero-Section'>
                <img src={herobg1} />
            </section>
            <div className='TitleSection w-full h-full flex flex-row gap-34'>
                <div className='TitleBG w-173 relative'>
                    <img src={bg2} className='h-32 absolute bottom-0 left-0'/>
                </div>
                <div className="TitleText flex flex-col font-['Istok_Web'] text-[#F2F2F2] pt-3 pb-6">
                    <h1 className='text-[48px] font-bold'>ECHOES BENEATH</h1>
                    <span className='max-w-267 text-[24px] font-normal'>
                        Descend into Echoes Beneath, 
                        a chilling first-person psychological horror game where your choices leads to multiple ending that reflect your moral compass. 
                        Play as Xavier, a sewer inspection leader for Brilliante, crushed by medical debts, facing a deceptively simple job that unravels into terror.
                    </span>
                </div>
            </div>
            <div className='BlankPage w-full h-58 bg-white' />
            <div className=''>
                <h1 className=''>a</h1>
            </div>
            <div>
                
            </div>
        </div>
    );
}