function Header({ toggleSidebar }) {
    try {
        return (
            <header className="bg-black py-4 fixed w-full top-0 z-50" data-name="header">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center" data-name="header-logo">
                        <button 
                            className="text-white mr-4 lg:hidden" 
                            onClick={toggleSidebar}
                            data-name="menu-button"
                        >
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                        <h1 className="text-lime-500 text-2xl font-bold">NatPad</h1>
                    </div>
                    
                    <nav className="hidden lg:flex space-x-6" data-name="desktop-nav">
                        <a href="#home" className="text-white hover:text-lime-500 transition-colors">Home</a>
                        <a href="#products" className="text-white hover:text-lime-500 transition-colors">Products</a>
                        <a href="#about" className="text-white hover:text-lime-500 transition-colors">About</a>
                        <a href="#contact" className="text-white hover:text-lime-500 transition-colors">Contact</a>
                    </nav>
                    
                    <div className="flex items-center space-x-4" data-name="header-actions">
                        <button className="btn btn-primary" data-name="quote-button">
                            Get Quote
                        </button>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
