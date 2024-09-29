const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-2 text-center py-4">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Juan Martín Román. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
