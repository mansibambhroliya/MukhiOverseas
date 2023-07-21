import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineFileText, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import SendBtn from './SendBtn';

export default function Top_Line() {

    return (
        <>
            <div className='top-line full-pad'>
                <div className="row top-line-space container-fluid mx-0">
                    <div className="col-md-6 col-sm-12 px-0">
                        <div className='d-flex f-div'>
                            <div>
                                <MdOutlineMail className='me-1 fs-5'></MdOutlineMail>
                                <span className='me-3'>mukhioverseas@gmail.com</span>
                            </div>
                            <div>
                                <FaMobileAlt className='me-1 fs-5'></FaMobileAlt>
                                <span>0856679089</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 d-flex justify-content-end px-0">
                        <SendBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}
