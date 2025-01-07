
import { GiCheckMark } from "react-icons/gi";


const MessageSuccessModal = () => {

  
    return <>
        <div className="bacdrop" > </div>

        <main className=" zindices w-[32rem] max-[568px]:w-[100%] rounded-xl bg-white px-[1rem] modal-modal border border-3 border-[grey] fixed top-[23vh] left-[35%] max-[1080px]:left-[25%] max-[800px]:left-[15%] max-[700px]:left-[5%] max-[700px]:left-[auto] ">
            <h2 className="text-center font-bold text-[1.05rem] montserrat-regular text-[18px]  pt-3">Message successfully sent</h2>
            <div className="flex place-content-center py-[2rem]">
                <span className="border border-[green] p-[1rem] rounded-[50%]">
                    <GiCheckMark color="green" />
                </span>
            </div>
        </main>
    </>
}

export default MessageSuccessModal;