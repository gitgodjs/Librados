export const Presentacion = ({ img, nText, text, imgPosition }) => {
    
    return (
        <section className={`grid grid-rows-1 p-2 items-center justify-items-center w-full md:grid-cols-2 ${imgPosition}`}>
            <div className="flex justify-center">
                <img src={img} alt="Descripción de la imagen" className="w-11/12 h-auto" />
            </div>
            <div className="flex flex-col text-center md:text-left">
                <div>
                    <h2 className="text-xl font-bold md:text-2xl">{nText}</h2>
                </div>
                <div className="mt-2">
                    <p className="md:text-xl">{text}</p>
                </div>
            </div>
        </section>
    );
};