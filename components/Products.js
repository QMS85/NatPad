function Products() {
    try {
        const products = [
            {
                id: 1,
                name: "Performance Series X1",
                description: "High-performance tyres for luxury vehicles",
                price: "R1,200",
                image: "https://images.unsplash.com/photo-1568657559534-64796a46c02b?ixlib=rb-4.0.3"
            },
            {
                id: 2,
                name: "All-Terrain Pro",
                description: "Durable tyres for SUVs and off-road vehicles",
                price: "R1,500",
                image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3"
            },
            {
                id: 3,
                name: "EcoGrip Elite",
                description: "Fuel-efficient tyres for everyday driving",
                price: "R900",
                image: "https://images.unsplash.com/photo-1582558570655-5b61c4c1e03e?ixlib=rb-4.0.3"
            }
        ];

        return (
            <section id="products" className="section bg-gray-900" data-name="products">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Premium <span className="text-lime-500">Products</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <div 
                                key={product.id}
                                className="bg-gray-800 rounded-lg overflow-hidden hover-scale glow-effect"
                                data-name={`product-card-${product.id}`}
                            >
                                <img 
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-400 mb-4">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lime-500 font-bold">{product.price}</span>
                                        <button className="btn btn-primary">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Products component error:', error);
        reportError(error);
        return null;
    }
}
