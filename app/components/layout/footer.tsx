const Footer = () => {
    return (
        <footer className="bg-gray-800 p-6 mt-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white gap-4">
                <div>
                    <h2 className="text-lg font-semibold mb-2">Invoice Maker</h2>
                    <p className="mb-4">© 2024 Invoice Maker. All rights reserved.</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <div className="flex flex-col space-y-1">
                        <a href="/about" className="hover:underline">About Us</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <a href="/terms" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
