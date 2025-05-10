function App() {
    try {
        const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

        const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
        };

        return (
            <div className="min-h-screen bg-black" data-name="app">
                <Header toggleSidebar={toggleSidebar} />
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <main>
                    <Hero />
                    <Products />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
