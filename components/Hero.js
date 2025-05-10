function Hero() {
    try {
        return (
            <section className="hero-section relative pt-20" data-name="hero">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="text-center lg:text-left" data-name="hero-content">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                                Leading Tyre Manufacturing in
                                <span className="text-lime-500"> South Africa</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-8">
                                Premium quality tyres for all vehicles. Built with innovation,
                                engineered for performance.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button className="btn btn-primary" data-name="explore-button">
                                    Explore Products
                                </button>
                                <button className="btn bg-transparent border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black" data-name="contact-button">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block" data-name="hero-image">
                            <img 
                                src="https://images.unsplash.com/photo-1578844251758-2f71da4aab1a?ixlib=rb-4.0.3"
                                alt="Premium Tyres"
                                className="rounded-lg shadow-2xl hover-scale"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
