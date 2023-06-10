import "./ContactPage.css"

function ContactPage({changingMode, outsideCloser}) {
    return (
        <div className={changingMode === "light" ? "contactPage" : "contactPageDarkMode"} onClick={() => {
            outsideCloser()
        }}>
            <h1 className={changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"}>Contact Me</h1>

            <div className={changingMode === "light" ? "divForContactPart" : "divForContactPartDarkMode"}>
                <form action="https://formspree.io/f/myyaqqeo" method="POST">
                    <input type="text" placeholder="Input your Full Name" name="Name" required/>
                    <input type="text" placeholder="Input your email" name="Email" required/>
                    <textarea name="Message" placeholder="Your message to me..." required/>
                    <button className={changingMode === "light" ? "sendMeButton" : "sendMeButtonDarkMode"} type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;