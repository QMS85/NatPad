function Footer() {
    try {
        return (
            <footer className="bg-gray-900 pt-12 pb-6" data-name="footer">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-bold text-lime-500 mb-4">NatPad</h3>
                            <p className="text-gray-400">
                                Leading tyre manufacturer in South Africa, delivering quality and innovation since 1995.
                            </p>
                        </div>
                        
                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#about" className="text-gray-400 hover:text-lime-500">About Us</a></li>
                                <li><a href="#products" className="text-gray-400 hover:text-lime-500">Products</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-lime-500">Services</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-lime-500">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-contact">
                            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    <i className="fas fa-map-marker-alt text-lime-500 mr-2"></i>
                                    123 Tyre Street, Johannesburg
                                </li>
                                <li className="text-gray-400">
                                    <i className="fas fa-phone text-lime-500 mr-2"></i>
                                    +27 11 234 5678
                                </li>
                                <li className="text-gray-400">
                                    <i className="fas fa-envelope text-lime-500 mr-2"></i>
                                    info@natpad.co.za
                                </li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-social">
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-lime-500 text-2xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-lime-500 text-2xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-lime-500 text-2xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-lime-500 text-2xl">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-lime-500 text-2xl">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-lime-500 text-2xl">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 pt-6 text-center" data-name="footer-copyright">
                        <p className="text-gray-400">
                            © 2024 NatPad. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
