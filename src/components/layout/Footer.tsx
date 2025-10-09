const Footer = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <>
            <footer className="text-white bg-cf-dark-gray">
                <div className="container mx-auto py-8 text-center">
                    @{currentYear} Coding Factory 8
                </div>
            </footer>
        </>
    )
}

export default Footer;