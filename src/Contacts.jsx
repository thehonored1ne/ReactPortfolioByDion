

const Contacts = () => {

    return (
        
        <div className="mx-6">

            <div className="border-2 border-gray-600 border-r-white border-b-white p-3 my-3">
                
                <div className="flex justify-start items-center gap-3 text-xl my-2 font-bold">
                    <img src="https://win98icons.alexmeub.com/icons/png/winrep-1.png" alt="img" />
                    <h1>Get in touch with me</h1>
                </div>
                
                <p className="text-xl">If you have any question or inquiries, you can call me in the contact information i provided below.</p>

            </div>

            <ul className=" m-4 flex flex-col gap-4 justify-center items-center">

                <li>
                    <div>
                        <p className="text-xl font-bold">
                            ✉
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dion.areglo1234@gmail.com&su=Project Inquiry&body=Hi Dion," 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className=" hover:underline"  
                            >
                                <span className="mx-2">Email: dion.areglo1234@gmail.com</span>
                            </a>
                        </p>
                    </div>
                </li>

                <li>
                    <p className="text-xl font-bold">📞 <span className="mx-2">Phone #: 09621107472</span></p>
                </li>

            </ul>
            
        </div>
    )
}

export default Contacts