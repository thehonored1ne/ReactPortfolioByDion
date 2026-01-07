

function Contacts() {
    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                <li>
                    <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dion.areglo1234@gmail.com&su=Project Inquiry&body=Hi Dion," 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=" hover:underline"
                    >
                    <p className="text-2xl font-bold">📧 Email: dion.areglo1234@gmail.com</p>
                    </a>
                </li>
                <li>
                    <p className="text-2xl font-bold">📞Phone: 09621107472</p>
                </li>
            </ul>
        </div>
    )
}

export default Contacts