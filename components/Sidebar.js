function Sidebar({ isOpen, toggleSidebar }) {
    try {
        return (
            <div data-name="sidebar">
                <div 
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 lg:hidden ${
                        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={toggleSidebar}
                ></div>
                
                <div 
                    className={`fixed top-0 left-0 w-64 h-full bg-navy-900 transform transition-transform duration-300 ease-in-out z-50 ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    data-name="sidebar-content"
                >
                    <div className="p-4 border-b border-gray-700">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-lime-500">NatPad</h2>
                            <button 
                                onClick={toggleSidebar}
                                className="text-white hover:text-lime-500"
                                data-name="close-sidebar"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                    </div>
                    
                    <nav className="p-4" data-name="mobile-nav">
                        <a href="#home" className="block py-2 text-white hover:text-lime-500">Home</a>
                        <a href="#products" className="block py-2 text-white hover:text-lime-500">Products</a>
                        <a href="#about" className="block py-2 text-white hover:text-lime-500">About</a>
                        <a href="#contact" className="block py-2 text-white hover:text-lime-500">Contact</a>
                    </nav>
                    
                    <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
                        <button 
                            className="w-full btn btn-primary"
                            data-name="mobile-quote-button"
                        >
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
        return null;
    }
}
