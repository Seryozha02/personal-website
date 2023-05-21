import "./ContactPage.css"

function ContactPage({changingMode, outsideCloser}) {
    return (
        <div className={changingMode === "light" ? "contactPage" : "contactPageDarkMode"} onClick={() => {
            outsideCloser()
        }}>
            <h1 className={changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"}>Contact Me</h1>

            <div className="divForContactPart">
                <form action="https://formsubmit.co/0d822425016adcf1435014d2bddf4ae3" method="POST">
                    <input type="text" placeholder="Input your Full Name" name="Name" required/>
                    <input type="text" placeholder="Input your email" name="Email" required/>
                    <textarea name="Message" placeholder="Your message to me..." required/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;